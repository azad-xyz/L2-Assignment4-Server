import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
  const { product, quantity } = orderData;

  const productInInventory = await Product.findById(product);
  console.log('orderService =>', productInInventory);

  // Check if the product exists
  if (!productInInventory) {
    throw new Error('Product not found.');
  }

  // Ensure the product has a defined and valid quantity
  if (typeof productInInventory.quantity !== 'number') {
    throw new Error('Product quantity is not properly defined.');
  }

  // Check if there is sufficient stock available
  if (productInInventory.quantity < quantity) {
    throw new Error('Insufficient stock available.');
  }

  const order = await Order.create(orderData);

  // Update the inventory: reduce quantity and adjust inStock status
  productInInventory.quantity -= quantity;
  productInInventory.inStock = productInInventory.quantity > 0;

  // Save the updated product inventory
  await productInInventory.save();

  return order;
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
