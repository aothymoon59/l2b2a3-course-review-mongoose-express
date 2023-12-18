import { TGenericErrorResponse } from '../interface/error.interface';
import httpStatus from 'http-status';
import { ZodError, ZodIssue } from 'zod';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  let errorMessage: string = '';
  err.issues.forEach((issue: ZodIssue) => {
    errorMessage += `${issue?.path[issue.path.length - 1]} is Required`;
  });
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage,
    errorDetails: err,
  };
};

export default handleZodError;
