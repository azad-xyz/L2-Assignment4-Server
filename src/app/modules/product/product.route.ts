import express from 'express';
import { ProductControllers } from './product.controller';
import { multerUpload } from '../../config/CloudinaryConfig/cloudinary.config';

const ProductRoutes = express.Router();

ProductRoutes.post(
  '/create-product',
  // auth(USER_ROLE.user),
  // validateRequest(ProductValidations.createProductValidationSchema),
  multerUpload.single('image'),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return ProductControllers.createProduct(req, res, next);
  },
);

ProductRoutes.get('/', ProductControllers.getAllProducts);
ProductRoutes.patch('/:id', ProductControllers.updateProduct);
ProductRoutes.delete('/:id', ProductControllers.deleteProduct);

export default ProductRoutes;
