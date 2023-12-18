import mongoose from 'mongoose';
import { TGenericErrorResponse } from '../interface/error.interface';
import httpStatus from 'http-status';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const statusCode = httpStatus.BAD_REQUEST;

  return {
    statusCode,
    message: 'Invalid ID',
    errorMessage: `${err?.value} is not a valid ID`,
    errorDetails: err,
  };
};

export default handleCastError;
