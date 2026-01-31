import { z } from "zod";

export const createProductSchema = z.object({
    body: z.object({
        name: z.string().min(3),
        description: z.string().min(10),
        price: z.number().positive(),
        stock: z.number().int().nonnegative(),
        category: z.string().min(3),
    }),
});

export const updateProductSchema = z.object({
    body: z.object({
        name: z.string().min(3).optional(),
        description: z.string().min(10).optional(),
        price: z.number().positive().optional(),
        stock: z.number().int().nonnegative().optional(),
        category: z.string().min(3).optional(),
    }),
});
