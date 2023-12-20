import { Router } from 'express';
import { CategoryRoutes } from '../modules/Category/category.route';
import { CourseRoutes } from '../modules/Course/course.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    routes: CategoryRoutes,
  },
  {
    path: '/',
    routes: CourseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
