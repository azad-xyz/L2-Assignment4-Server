import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getProductsFromDB = async (query: Record<string, unknown>) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const skip = (page - 1) * limit;

  const result = await Product.find().skip(skip).limit(limit);
  const total = await Product.countDocuments();
  const totalPages = Math.ceil(total / limit);
  return {
    page,
    limit,
    total,
    totalPages,
    result,
  };
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
