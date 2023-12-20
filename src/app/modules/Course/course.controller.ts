import { TQuery } from '../../interface/query.interface';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseServices } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Course created successfully',
    data: result,
  });
});

const getCourses = catchAsync(async (req, res) => {
  const result = await CourseServices.getCoursesFromDb(req.query as TQuery);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Courses retrieved successfully',
    meta: result?.meta,
    data: result.courses,
  });
});

export const CourseControllers = {
  createCourse,
  getCourses,
};
