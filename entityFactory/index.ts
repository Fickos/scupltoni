import mongoose from "mongoose";

export async function connectDatabase(dbUri: string) {
    await mongoose.connect(dbUri);
}
