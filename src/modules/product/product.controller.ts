import { Request, Response, NextFunction } from "express";
import { productService } from "./product.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

class ProductController {
    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(new ApiResponse(201, product, "Product created successfully"));
        } catch (error) {
            next(error);
        }
    }

    public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { products, total } = await productService.getAllProducts(req.query);
            res.status(200).json(new ApiResponse(200, { products, total }, "Products retrieved successfully"));
        } catch (error) {
            next(error);
        }
    }

    public async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const product = await productService.getProductById(req.params.id as string);
            res.status(200).json(new ApiResponse(200, product, "Product retrieved successfully"));
        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const product = await productService.updateProduct(req.params.id as string, req.body);
            res.status(200).json(new ApiResponse(200, product, "Product updated successfully"));
        } catch (error) {
            next(error);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await productService.deleteProduct(req.params.id as string);
            res.status(200).json(new ApiResponse(200, null, "Product deleted successfully"));
        } catch (error) {
            next(error);
        }
    }
}

export const productController = new ProductController();
