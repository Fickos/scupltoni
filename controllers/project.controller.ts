import { NextFunction, Request } from "express";
import { generateProject } from "../sculptoni-core";
import { Project } from "../types/Project";

// TO DO: create a model which can be saved/loaded (positions are neccesarry for storing in mongo not for generation of React project)
export const save = async (req: Request, res: Response, next: NextFunction) => {

}

export const load = async (req: Request, res: Response, next: NextFunction) => {

}

export const list = async (req: Request, res: Response, next: NextFunction) => {

}

export const generateAndExportProject = async (req: Request, res: Response, next: NextFunction) => {
    // feed the Project model to the library
    const result = await generateProject(req.IncomingParams as Project);
}

export const createProjectFromConfig = async (req: Request, res: Response, next: NextFunction) => {
    // req.IncomingParams -> contains configuration file(s?) 
    // whether in XML or custom SYNTAX
    // THIS PART SHOULD HANDLE THE VISUALIZATION (To display it at certain positions if none are provided!)
}

export const addParticipantsToProject = async (req: Request, res: Response, next: NextFunction) => {

}

export const removeParticipantsFromProject = async (req: Request, res: Response, next: NextFunction) => {
    
}
