import { Product, IProduct } from "./product.model.js";

class ProductRepository {
    public async create(data: Partial<IProduct>): Promise<IProduct> {
        return await Product.create(data);
    }

    public async findAll(skip: number, limit: number): Promise<IProduct[]> {
        return await Product.find().skip(skip).limit(limit);
    }

    public async countAll(): Promise<number> {
        return await Product.countDocuments();
    }

    public async findById(id: string): Promise<IProduct | null> {
        return await Product.findById(id);
    }

    public async update(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
        return await Product.findByIdAndUpdate(id, data, { new: true });
    }

    public async delete(id: string): Promise<IProduct | null> {
        return await Product.findByIdAndDelete(id);
    }
}

export const productRepository = new ProductRepository();
