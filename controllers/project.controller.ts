import { NextFunction, Request, Response } from "express";
import { ProjectDB } from "../entityFactory/models/Project";
import sendResponse from '../middleware/response';
import constants from "../constants";

// create a model which can be saved/loaded (positions are neccesarry for storing in mongo not for generation of React project)
export const save = async (req: Request, res: Response, next: NextFunction) => {
    const { id, name, elements } = req?.IncomingParams;

    if (id) {
        const result = await ProjectDB.findByIdAndUpdate(id, {
            name, 
            elements
        });
        res.OutgoingParams = {
            status: 200,
            key: constants.PROJECT_CONSTANTS.PROJECT_SAVED,
            message: "Successfully saved a project",
            result
        }
        return sendResponse(req, res);
    }

    const project = new ProjectDB({ name, elements });

    const result = await project.save();

    res.OutgoingParams = {
        status: 200,
        key: constants.PROJECT_CONSTANTS.PROJECT_SAVED,
        message: "Successfully saved a project",
        result
    }
    return sendResponse(req, res);
}

export const load = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req?.params;;
    const result = await ProjectDB.findById(id);
    if (!result?.name) {
        res.OutgoingParams = {
            status: 404,
            key: constants.API_ERROR.ENTITY_NOT_FOUND,
            message: "Project with the given id is not found",
        }
        return sendResponse(req, res);
    }
    // TO DO: return 404 or 403 depending on scenario
    res.OutgoingParams = {
        status: 200,
        key: constants.PROJECT_CONSTANTS.PROJECT_LOAD,
        message: "Successfully loaded a project",
        result
    }
    return sendResponse(req, res);
}

export const list = async (req: Request, res: Response, next: NextFunction) => {
    // TO DO: Return only ones that user has permission to
    const result = await ProjectDB.find();

    res.OutgoingParams = {
        status: 200,
        key: constants.PROJECT_CONSTANTS.PROJECT_LIST,
        message: "Successfully listed projects",
        result
    }
    return sendResponse(req, res);
}

export const generateAndExportProject = async (req: Request, res: Response, next: NextFunction) => {
    // feed the Project model to the library
    // const result = await generateProject(req.IncomingParams as Project);
    
    res.OutgoingParams = {
        status: 501,
        key: constants.API_ERROR.NOT_YET_IMPLEMENTED,
        message: "NYI",
    }
    return sendResponse(req, res);
}

export const createProjectFromConfig = async (req: Request, res: Response, next: NextFunction) => {
    // req.IncomingParams -> contains configuration file(s?) 
    // whether in XML or custom SYNTAX
    // THIS PART SHOULD HANDLE THE VISUALIZATION (To display it at certain positions if none are provided!)
    res.OutgoingParams = {
        status: 501,
        key: constants.API_ERROR.NOT_YET_IMPLEMENTED,
        message: "NYI",
    }
    return sendResponse(req, res);
}

export const addParticipantsToProject = async (req: Request, res: Response, next: NextFunction) => {
    res.OutgoingParams = {
        status: 501,
        key: constants.API_ERROR.NOT_YET_IMPLEMENTED,
        message: "NYI",
    }
    return sendResponse(req, res);
}

export const removeParticipantsFromProject = async (req: Request, res: Response, next: NextFunction) => {
    res.OutgoingParams = {
        status: 501,
        key: constants.API_ERROR.NOT_YET_IMPLEMENTED,
        message: "NYI",
    }
    return sendResponse(req, res);    
}
