import { z } from 'zod';

const categoryValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Course category must be string',
      required_error: 'Course category is required',
    }),
  }),
});

// const updateCategoryValidationSchema = z.object({
//   body: z.object({
//     name: z
//       .string({
//         invalid_type_error: 'Course category must be string',
//         required_error: 'Course category is required',
//       })
//       .optional(),
//   }),
// });

export const categoryValidations = {
  categoryValidationSchema,
  //   updateCategoryValidationSchema,
};
