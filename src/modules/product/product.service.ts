import { productRepository } from "./product.repository.js";
import { IProduct } from "./product.model.js";
import { Pagination } from "../../utils/pagination.js";
import { ApiError } from "../../utils/ApiError.js";

class ProductService {
    public async createProduct(data: Partial<IProduct>): Promise<IProduct> {
        return await productRepository.create(data);
    }

    public async getAllProducts(query: any): Promise<{ products: IProduct[]; total: number }> {
        const pagination = new Pagination(query);
        const products = await productRepository.findAll(pagination.skip, pagination.limit);
        const total = await productRepository.countAll();
        return { products, total };
    }

    public async getProductById(id: string): Promise<IProduct> {
        const product = await productRepository.findById(id);
        if (!product) {
            throw new ApiError(404, "Product not found");
        }
        return product;
    }

    public async updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct> {
        const product = await productRepository.update(id, data);
        if (!product) {
            throw new ApiError(404, "Product not found");
        }
        return product;
    }

    public async deleteProduct(id: string): Promise<void> {
        const product = await productRepository.delete(id);
        if (!product) {
            throw new ApiError(404, "Product not found");
        }
    }
}

export const productService = new ProductService();
