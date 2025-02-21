import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    image: z.string({ required_error: 'image is required' }),
    brand: z.string({ required_error: 'brand is required' }),
    price: z.number({ required_error: 'price is required' }),
    model: z.string({ required_error: 'model is required' }),
    quantity: z.number({ required_error: 'quantity is required' }),

    inStock: z.boolean({ required_error: 'stock is required' }),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    image: z.string().optional(),
    brand: z.string().optional(),
    price: z.number().optional(),
    model: z.string().optional(),
    quantity: z.number().optional(),

    inStock: z.boolean({ required_error: 'stock is required' }).optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
