import { Router } from 'express';
import { CategoryRoutes } from '../modules/Category/category.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/categories',
    routes: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
