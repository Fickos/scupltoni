import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';


export default function (req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req?.headers['authorization'];

    const pathParams = req?.params ?? {}
    const queryParams = req?.query ?? {};
    const bodyParams = req?.body ?? {};

    const token = authorizationHeader?.split(' ')?.[1] ?? queryParams.Token ?? bodyParams.Token ?? undefined;

    req.RequestID = uuidv4();
    req.IncomingParams = {
        ...pathParams,
        ...queryParams,
        ...bodyParams,
        Token: token,
    }
    next();
}
