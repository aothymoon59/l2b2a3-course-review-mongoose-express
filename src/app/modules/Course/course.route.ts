import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './course.controller';

const router = express.Router();

router.post(
  '/course',
  validateRequest(CourseValidations.courseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/courses', CourseControllers.getCourses);

export const CourseRoutes = router;