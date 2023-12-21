import { Router } from 'express';
import { CategoryRoutes } from '../modules/Category/category.route';
import { CourseRoutes } from '../modules/Course/course.route';
import { ReviewRoutes } from '../modules/Review/review.route';

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
  {
    path: '/',
    routes: ReviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
