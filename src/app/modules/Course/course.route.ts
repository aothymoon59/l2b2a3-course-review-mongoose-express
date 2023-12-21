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

router.put(
  '/courses/:courseId',
  validateRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse,
);

router.get('/courses/:courseId/reviews', CourseControllers.getCourseAndReviews);

router.get('/course/best', CourseControllers.getBestCourse);

router.get('/courses', CourseControllers.getCourses);

export const CourseRoutes = router;
