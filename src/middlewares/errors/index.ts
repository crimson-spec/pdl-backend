import { ApiError } from '../../shared/classes/ApiError';
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof ApiError) {
    const statusCode = error.statusCode;
    const message = error.message;
    return response.status(error.statusCode).json({
      message,
      statusCode,
    });
  }
  console.log(error);
  return response.status(500).json({
    message: 'Internal Server Error',
    statusCode: 500,
  });
};
