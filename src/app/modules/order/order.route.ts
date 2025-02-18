import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/create-order', OrderControllers.createOrder);
// router.get('/revenue', OrderControllers.calculateRevenue);

router.get('/', OrderControllers.getAllOrder);

router.patch('/:id', OrderControllers.updateSingleOrder);

router.delete('/:id', OrderControllers.deleteSingleOrder);

export const OrderRoutes = router;
