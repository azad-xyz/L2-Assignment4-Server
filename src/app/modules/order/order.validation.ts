import { z } from 'zod';

const createOrderValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is required' }),
    product: z.string({ required_error: 'product is required' }),
    quantity: z.number({ required_error: 'quantity is required' }),
    totalPrice: z.number({ required_error: 'total price is required' }),
  }),
});

export const OrderValidations = {
  createOrderValidationSchema,
};
