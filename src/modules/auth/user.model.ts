import { Schema, model, Document } from "mongoose";
import { ROLES, Role } from "../../constants/roles.js";

interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    role: Role;
    age: number;
}

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: {
            type: String,
            enum: Object.values(ROLES),
            default: ROLES.USER,
        },
        age: { type: Number, required: true },
    },
    { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export { User, IUser };
