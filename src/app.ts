import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { db } from "./config/db.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { authRoutes } from "./modules/auth/auth.routes.js";
import { productRoutes } from "./modules/product/product.routes.js";

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

        this.app.use("/api/v1/auth", authRoutes);
        this.app.use("/api/v1/products", productRoutes);
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware.notFound);
        this.app.use(errorMiddleware.handle);
    }

    public async listen() {
        try {
            await db.connect();
            this.app.listen(this.port, () => {
                console.log(`Server Running at: http://localhost:${this.port}`);
            });
        } catch (error) {
            console.error("Failed to start server:", error);
            process.exit(1);
        }
    }
}

export default App;
