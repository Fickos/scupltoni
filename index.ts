import express, { Application } from 'express';
import cors from 'cors';
import http from 'http';
import config from './config';
import formatRequest from './middleware/request';
import formatResponse from './middleware/response';
import routes from './routes';

const app: Application = express();

app.use(cors({ origin: config.corsSettings.origin }));
app.use('/', formatRequest, routes, formatResponse);

const server = http.createServer(app);

const startServer = async () => {
    server.listen(config.server.port);
}

startServer();
