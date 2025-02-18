import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const updateSingleOrderIntoDB = async (
  id: string,
  updatedData: Partial<TOrder>,
) => {
  const result = await Order.findByIdAndUpdate(id, updatedData, { new: true });
  return result;
};

const deleteSingleOrderFromDB = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  updateSingleOrderIntoDB,
  deleteSingleOrderFromDB,
};
