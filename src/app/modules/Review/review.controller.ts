import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewServices } from './review.service';
import { TReview } from './review.interface';

const createReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDb(req.body as TReview);

  // send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Review created successfully',
    data: result,
  });
});

export const ReviewControllers = {
  createReview,
};
