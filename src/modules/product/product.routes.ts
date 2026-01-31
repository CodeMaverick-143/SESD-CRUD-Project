import { Router } from "express";
import { productController } from "./product.controller.js";
import { validateMiddleware } from "../../middlewares/validate.middleware.js";
import { createProductSchema, updateProductSchema } from "./product.validator.js";

class ProductRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/", validateMiddleware.validate(createProductSchema), productController.create.bind(productController));
        this.router.get("/", productController.getAll.bind(productController));
        this.router.get("/:id", productController.getOne.bind(productController));
        this.router.put("/:id", validateMiddleware.validate(updateProductSchema), productController.update.bind(productController));
        this.router.delete("/:id", productController.delete.bind(productController));
    }
}

export const productRoutes = new ProductRoutes().router;
