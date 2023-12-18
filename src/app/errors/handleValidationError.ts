import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../interface/error.interface';
import httpStatus from 'http-status';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  let errorMessage: string = '';
  Object.values(err.errors).forEach(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      errorMessage += `${val?.path} is Required`;
    },
  );
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage,
    errorDetails: err,
  };
};

export default handleValidationError;
