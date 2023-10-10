import { Request, Response } from "express";
import CONSTANTS from "../constants";

export default function (req: Request, res: Response) {
    const apiResult = res.OutgoingParams;

    const status = apiResult?.status ?? 404;
    const responseJson = { key: apiResult?.key ?? CONSTANTS.API_ERROR.ROUTE_NOT_FOUND, message: apiResult?.message ?? 'route_not_found', result: apiResult?.result ?? {} };

    return res.status(status).send(responseJson);
}
