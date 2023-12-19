import express from 'express';
import { CategoryControllers } from './category.controller';

const router = express.Router();

router.post(
  '/',
  //   validateRequest(
  //     academicDepartmentValidations.createAcademicDepartmentValidationSchema,
  //   ),
  CategoryControllers.createCategory,
);

// router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

export const CategoryRoutes = router;
