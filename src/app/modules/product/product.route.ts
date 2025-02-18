import express from 'express';
import { ProductControllers } from './product.controller';

const ProductRoutes = express.Router();

ProductRoutes.post(
  '/create-product',
  // auth(USER_ROLE.user),
  // validateRequest(ProductValidations.createProductValidationSchema),
  ProductControllers.createProduct,
);

ProductRoutes.get('/', ProductControllers.getAllProducts);
ProductRoutes.patch('/:id', ProductControllers.updateProduct);
ProductRoutes.delete('/:id', ProductControllers.deleteProduct);

export default ProductRoutes;
