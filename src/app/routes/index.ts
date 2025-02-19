import AdminRoutes from '../modules/admin/admin.route';
import { OrderRoutes } from '../modules/order/order.route';
import ProductRoutes from '../modules/product/product.route';
import express from 'express';
import UserRoutes from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  //change the path and routes
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
