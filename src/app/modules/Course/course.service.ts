import httpStatus from 'http-status';
import { TCourse } from './course.interface';
import { Course } from './course.model';
import AppError from '../../errors/AppError';
import { weeksBetweenDates } from './course.utils';

const createCourseIntoDB = async (payload: TCourse) => {
  const course = await Course.findOne({ title: payload.title });
  if (course) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `${payload.title} is already exists`,
    );
  }

  payload.durationInWeeks = weeksBetweenDates(
    payload.startDate,
    payload.endDate,
  );

  const result = await Course.create(payload);
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
};
