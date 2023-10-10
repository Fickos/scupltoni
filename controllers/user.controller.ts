import { Request, Response, NextFunction } from "express";
import constants from "../constants";
import sendResponse from '../middleware/response';
import { UserDB } from "../entityFactory/models/User";

export const list = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await UserDB.find();
        res.OutgoingParams = {
            status: 200,
            key: constants.API_SUCCESS.LIST_SUCCESSFUL,
            message: 'Successfully listed users',
            result: result
        }
        return sendResponse(req, res);
    } catch (e) {
        next(e);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.IncomingParams;
        if (username == 'a' && password == 'b') {
            res.OutgoingParams = {
                status: 200,
                key: constants.USER_CONSTANTS.LOGIN_SUCCESS,
                message: 'Login successful',
                result: { token: "fanifqnfqifnqfiqnwfiqnwfqw" }
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

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, name, surname, email } = req?.IncomingParams;
        // TO DO: validation
        const newUser = new UserDB({ username, password, name, surname, email }); // TO DO: hash password
        const result = await newUser.save();
        res.OutgoingParams = {
            status: 200,
            key: constants.API_SUCCESS.CREATE_SUCCESSFUL,
            message: 'Successful registration!',
            result: result
        }
        return sendResponse(req, res);
    } catch (e) {
        next(e);
    }
}
