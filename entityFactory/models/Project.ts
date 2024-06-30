import mongoose, { Schema } from "mongoose";

const projectSchema = new mongoose.Schema({
    name: { type: String, minLength: 1, maxLength: 50 },
    elements: [Schema.Types.Mixed]
});

export const ProjectDB = mongoose.model('Project', projectSchema);