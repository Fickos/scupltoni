import { Request, Response, NextFunction } from "express";
import constants from "../constants";
import sendResponse from '../middleware/response';

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { Username, Password } = req.IncomingParams;
        if (Username == 'a' && Password == 'b') {
            res.OutgoingParams = {
                status: 200,
                key: constants.USER_CONSTANTS.LOGIN_SUCCESS,
                message: 'Login successful',
                result: { Token: "fanifqnfqifnqfiqnwfiqnwfqw" }
            }
            return sendResponse(req, res);
        }
        res.OutgoingParams = {
            status: 400,
            key: constants.USER_CONSTANTS.BAD_CREDENTIALS,
            message: 'Incorrect username or password',
        }
        return sendResponse(req, res);
    } catch (e) {
        next(e);
    }
}
