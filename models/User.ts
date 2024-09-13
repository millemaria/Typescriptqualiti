import { Schema, Document, model } from "mongoose";

interface IUser extends Document {
    name?: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // createdAt: { type: Date, default: new Date() }
    // createdAt: { type: Date, default: Date.now } 
}, { timestamps: true }); // criar automaticamente createdAt e updateAt 

export const User = model<IUser>("User", UserSchema);