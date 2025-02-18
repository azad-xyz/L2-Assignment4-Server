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

export const OrderControllers = {
  createOrder,
};
