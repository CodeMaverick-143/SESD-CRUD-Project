import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { db } from "./config/db.js";

class App {
    public app: Application;
    public port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeErrorHandling();
    }

    private initializeMiddlewares() {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes() {
        this.app.get("/health", (_req: Request, res: Response) => {
            res.status(200).json({
                success: true,
                message: "API is Live",
            });
        });
    }

    private initializeErrorHandling() {
        this.app.use((_req: Request, res: Response) => {
            res.status(404).json({
                success: false,
                message: "Route not found",
            });
        });
    }

    public async listen() {
        try {
            await db.connect();
            this.app.listen(this.port, () => {
                console.log(`Server Running at: ${this.port}`);
            });
        } catch (error) {
            console.error("Failed to start server:", error);
            process.exit(1);
        }
    }
}

export default App;
