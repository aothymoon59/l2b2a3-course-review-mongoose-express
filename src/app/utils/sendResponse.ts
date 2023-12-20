import { Response } from 'express';

type TResponse<T> = {
  success: boolean;
  statusCode: number;
  message?: string;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const meta = data?.meta;
  res.status(data?.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    meta,
    data: data?.data,
  });
};
export default sendResponse;
