import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDB = async (payload: TCategory) => {
  const category = await Category.findOne({ name: payload.name });
  if (category) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `${payload.name} is already exists`,
    );
  }
  const result = await Category.create(payload);
  return result;
};

const getAllCategory = async () => {
  const result = await Category.find();
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategory,
};
