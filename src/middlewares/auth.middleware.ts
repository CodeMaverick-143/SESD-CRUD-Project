import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

interface AuthRequest extends Request {
    user?: any;
}

class AuthMiddleware {
    public async authenticate(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
        const token = req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            res.status(401).json({ success: false, message: "Access Denied" });
            return;
        }

        try {
            const verified = jwt.verify(token, env.JWT_SECRET);
            req.user = verified;
            next();
        } catch (error) {
            res.status(400).json({ success: false, message: "Invalid Token" });
        }
    }
}

export const authMiddleware = new AuthMiddleware();
