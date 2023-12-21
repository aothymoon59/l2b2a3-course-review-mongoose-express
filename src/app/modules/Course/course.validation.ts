import { z } from 'zod';

const tagValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Tag name must be string',
    required_error: 'Tag name is required',
  }),
  isDeleted: z.boolean(),
});

const detailsValidationSchema = z.object({
  level: z.string({
    invalid_type_error: 'level must be string',
    required_error: 'level is required',
  }),
  description: z.string({
    invalid_type_error: 'description must be string',
    required_error: 'description is required',
  }),
});

const courseValidationSchema = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'title must be string',
      required_error: 'title is required',
    }),
    instructor: z.string({
      invalid_type_error: 'instructor must be string',
      required_error: 'instructor is required',
    }),
    categoryId: z.string({
      invalid_type_error: 'categoryId must be string',
      required_error: 'categoryId is required',
    }),
    price: z.number({
      invalid_type_error: 'price must be number',
      required_error: 'price is required',
    }),
    tags: z.array(tagValidationSchema),
    startDate: z.string({
      invalid_type_error: 'startDate must be string',
      required_error: 'startDate is required',
    }),
    endDate: z.string({
      invalid_type_error: 'endDate must be string',
      required_error: 'endDate is required',
    }),
    language: z.string({
      invalid_type_error: 'language must be string',
      required_error: 'language is required',
    }),
    provider: z.string({
      invalid_type_error: 'provider must be string',
      required_error: 'provider is required',
    }),
    details: detailsValidationSchema,
  }),
});

const updateTagValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'Tag name must be string',
      required_error: 'Tag name is required',
    })
    .optional(),
  isDeleted: z.boolean().optional(),
});

const updateDetailsValidationSchema = z.object({
  level: z
    .string({
      invalid_type_error: 'level must be string',
      required_error: 'level is required',
    })
    .optional(),
  description: z
    .string({
      invalid_type_error: 'description must be string',
      required_error: 'description is required',
    })
    .optional(),
});

const updateCourseValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: 'title must be string',
        required_error: 'title is required',
      })
      .optional(),
    instructor: z
      .string({
        invalid_type_error: 'instructor must be string',
        required_error: 'instructor is required',
      })
      .optional(),
    categoryId: z
      .string({
        invalid_type_error: 'categoryId must be string',
        required_error: 'categoryId is required',
      })
      .optional(),
    price: z
      .number({
        invalid_type_error: 'price must be number',
        required_error: 'price is required',
      })
      .optional(),
    tags: z.array(updateTagValidationSchema).optional(),
    startDate: z
      .string({
        invalid_type_error: 'startDate must be string',
        required_error: 'startDate is required',
      })
      .optional(),
    endDate: z
      .string({
        invalid_type_error: 'endDate must be string',
        required_error: 'endDate is required',
      })
      .optional(),
    language: z
      .string({
        invalid_type_error: 'language must be string',
        required_error: 'language is required',
      })
      .optional(),
    provider: z
      .string({
        invalid_type_error: 'provider must be string',
        required_error: 'provider is required',
      })
      .optional(),
    details: updateDetailsValidationSchema.optional(),
  }),
});

export const CourseValidations = {
  courseValidationSchema,
  updateCourseValidationSchema,
};
