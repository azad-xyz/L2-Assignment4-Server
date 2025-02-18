import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const updateSingleProductIntoDB = async (
  id: string,
  updatedData: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return result;
};

const deleteSingleProductFromDB = async (id: string) => {
  const result = Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  updateSingleProductIntoDB,
  deleteSingleProductFromDB,
};
