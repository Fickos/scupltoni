import express, { Request, Response, Application, NextFunction } from 'express';
import cors from 'cors';
import http from 'http';
import config from './config';
import formatRequest from './middleware/request';
import formatResponse from './middleware/response';
import routes from './routes';
import { connectDatabase } from './entityFactory';
import { logger } from './utils/logger';

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: config.corsSettings.origin }));
app.use('/', formatRequest, routes, formatResponse);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = res?.statusCode || res?.OutgoingParams?.status || 500;
    res.status(statusCode).json({ 'message': err.message });
});

const server = http.createServer(app);

const startServer = async () => {
    await connectDatabase(`${config.database.host}:${config.database.port}/${config.database.name}`);
    logger.info('Connected to database');
    server.listen(config.server.port);
    logger.info(`Server started on port: ${config.server.port}`);
}

startServer();
