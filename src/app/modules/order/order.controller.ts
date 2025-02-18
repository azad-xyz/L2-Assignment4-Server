import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from './order.services';
import httpStatus from 'http-status';

const createOrder = catchAsync(async (req, res) => {
  const { order } = req.body;
  const result = await OrderServices.createOrderIntoDB(order);
  sendResponse(res, {
    success: true,
    message: 'Product created successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

const getAllOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrdersFromDB();
  sendResponse(res, {
    success: true,
    message: 'Orders are retrieved successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

const updateSingleOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await OrderServices.updateSingleOrderIntoDB(id, updatedData);
  sendResponse(res, {
    success: true,
    message: 'Orders is updated successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

const deleteSingleOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderServices.deleteSingleOrderFromDB(id);
  sendResponse(res, {
    success: true,
    message: 'Orders is deleted successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrder,
  updateSingleOrder,
  deleteSingleOrder,
};
