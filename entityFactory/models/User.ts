import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, minLength: 1, maxLength: 50 },
    surname: { type: String, minLength: 2, maxLength: 60 },
    email: { type: String, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    username: { type: String, unique: true, minLength: 3, maxLenght: 30 },
    password: { type: String }
});

export const UserDB = mongoose.model('User', userSchema);
