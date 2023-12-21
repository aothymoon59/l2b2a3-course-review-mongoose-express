import httpStatus from 'http-status';
import { TQuery } from '../../interface/query.interface';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseServices } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const getCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getCoursesFromDb(req.query as TQuery);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Courses retrieved successfully',
    meta: result?.meta,
    data: result.courses,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const result = await CourseServices.updateCourseIntoDb(courseId, req.body);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course updated successfully',
    data: result,
  });
});

const getCourseAndReviews = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const result = await CourseServices.getCourseAndReviewsFromDb(courseId);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Course and Reviews retrieved successfully',
    data: result,
  });
});

const getBestCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getBestCourseFromDb();

  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Best course retrieved successfully',
    data: result,
  });
});

export const CourseControllers = {
  createCourse,
  getCourses,
  updateCourse,
  getCourseAndReviews,
  getBestCourse,
};
