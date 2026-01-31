import { Request, Response, NextFunction } from "express";
import { authService } from "./auth.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

class AuthController {
    public async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = await authService.signup(req.body);
            res.status(201).json(new ApiResponse(201, user, "User registered successfully"));
        } catch (error) {
            next(error);
        }
    }

    public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { user, token } = await authService.login(req.body);
            res.status(200).json(new ApiResponse(200, { user, token }, "Login successful"));
        } catch (error) {
            next(error);
        }
    }
}

export const authController = new AuthController();
