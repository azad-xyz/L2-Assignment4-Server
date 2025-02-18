import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await UserServices.createUserIntoDB(payload);
  sendResponse(res, {
    success: true,
    message: 'user registered successful',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);
  const { accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Login successful',
    data: {
      token: accessToken,
    },
  });
});

export const UserControllers = {
  createUser,
  loginUser,
};
