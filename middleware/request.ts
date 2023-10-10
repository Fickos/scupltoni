import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { logger } from '../utils/logger';


export default function (req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req?.headers['authorization'];

    const pathParams = req?.params ?? {}
    const queryParams = req?.query ?? {};
    const bodyParams = req?.body ?? {};

    const token = authorizationHeader?.split(' ')?.[1] ?? queryParams.token ?? bodyParams.token ?? undefined;

    req.RequestID = uuidv4();
    req.IncomingParams = {
        ...pathParams,
        ...queryParams,
        ...bodyParams,
        token: token,
    }

    logger.info(`Request with ID ${req?.RequestID} started`);

    if (req?.IncomingParams?.password) {
        const forLogs = { ...req?.IncomingParams, password: "*" }
        logger.info(forLogs);
    } else {
        logger.info(req?.IncomingParams);
    }

    next();
}
