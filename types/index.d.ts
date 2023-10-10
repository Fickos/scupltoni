declare namespace Express {
    export interface Request {
        RequestID: string;
        IncomingParams: Record<string, any>;
    }
    export interface Response {
        OutgoingParams: Record<string, any> & {
            status: number,
            key: string,
            message: string,
        };
    }
}