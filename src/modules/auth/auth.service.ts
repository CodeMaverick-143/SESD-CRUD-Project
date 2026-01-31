import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "./auth.repository.js";
import { env } from "../../config/env.js";
import { ApiError } from "../../utils/ApiError.js";
import { IUser } from "./user.model.js";

class AuthService {
    public async signup(data: Partial<IUser>): Promise<IUser> {
        const existingUser = await authRepository.findByEmail(data.email!);
        if (existingUser) {
            throw new ApiError(409, "User already exists");
        }

        const hashedPassword = await bcrypt.hash(data.password!, 10);
        return await authRepository.create({ ...data, password: hashedPassword });
    }

    public async login(data: Partial<IUser>): Promise<{ user: IUser; token: string }> {
        const user = await authRepository.findByEmail(data.email!);
        if (!user) {
            throw new ApiError(401, "Invalid credentials");
        }

        const isMatch = await bcrypt.compare(data.password!, user.password!);
        if (!isMatch) {
            throw new ApiError(401, "Invalid credentials");
        }

        const token = jwt.sign({ id: user._id, role: user.role }, env.JWT_SECRET, {
            expiresIn: "1d",
        });

        const userObj = user.toObject();
        delete userObj.password;

        return { user: userObj as IUser, token };
    }
}

export const authService = new AuthService();
