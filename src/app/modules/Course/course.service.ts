/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { TCourse } from './course.interface';
import { Course } from './course.model';
import AppError from '../../errors/AppError';
import { weeksBetweenDates } from './course.utils';
import { TQuery } from '../../interface/query.interface';
import makeQuery from '../../utils/makeQuery';

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

const getCoursesFromDb = async (query: TQuery) => {
  const { filter, sort, skip, limit, meta } = await makeQuery<any>(
    query,
    Course,
  );

  const courses = await Course.find(filter)
    .populate('categoryId')
    .sort(sort)
    .skip(skip)
    .limit(limit);

  return { courses, meta };
};

export const CourseServices = {
  createCourseIntoDB,
  getCoursesFromDb,
};
