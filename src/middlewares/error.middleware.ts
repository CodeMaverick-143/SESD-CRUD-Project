import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

class ErrorMiddleware {
    public handle(err: any, req: Request, res: Response, next: NextFunction): void {
        if (err instanceof ZodError) {
            res.status(400).json({
                success: false,
                message: "Validation Error",
                errors: err.issues,
            });
            return;
        }

        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }

    public notFound(req: Request, res: Response, next: NextFunction): void {
        res.status(404).json({
            success: false,
            message: "Route not found",
        });
    }
}

export const errorMiddleware = new ErrorMiddleware();
