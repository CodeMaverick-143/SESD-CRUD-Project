import { Router } from "express";
import { authController } from "./auth.controller.js";

class AuthRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/signup", authController.signup.bind(authController));
        this.router.post("/login", authController.login.bind(authController));
    }
}

export const authRoutes = new AuthRoutes().router;
