import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const { product } = req.body;
  const result = await ProductServices.createProductIntoDB(product);
  sendResponse(res, {
    success: true,
    message: 'Product created successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await ProductServices.updateSingleProductIntoDB(
    id,
    updatedData,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ProductServices.deleteSingleProductFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getProductsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product are retrived successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
