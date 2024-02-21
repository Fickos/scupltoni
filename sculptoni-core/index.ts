import { Project } from "../types/Project";
import { generateAppTemplates, generateComponents, generatePackageJSON, generateProjectStructure, generatePublic, generateServices, generateUtils } from "./generator";

export async function generateProject(projectModel: Project, outputDir: string = "base") {
    await generateProjectStructure(outputDir);
    await generateAppTemplates(1);
    await generatePackageJSON(projectModel.PackageJsonData);
    await generateComponents([...projectModel.Pages, ...projectModel.Components]);
    await generateServices(projectModel.Services);
    await generateUtils(projectModel.Utils);
    await generatePublic();
}
