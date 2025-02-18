import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    brand: z.string({ required_error: 'brand is required' }),
    price: z.number({ required_error: 'price is required' }),
    model: z.string({ required_error: 'model is required' }),
    stock: z.number({ required_error: 'stock is required' }),
  }),
});

const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }).optional(),
    brand: z.string({ required_error: 'brand is required' }).optional(),
    price: z.number({ required_error: 'price is required' }).optional(),
    model: z.string({ required_error: 'model is required' }).optional(),
    stock: z.number({ required_error: 'stock is required' }).optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
