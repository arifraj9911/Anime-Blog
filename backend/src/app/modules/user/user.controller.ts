import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await UserService.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

const getUsers = catchAsync(async (req, res) => {
  const result = await UserService.getUserFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieve successfully",
    data: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.deleteUserFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users deleted successfully",
    data: result,
  });
});

const userStatusChange = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.userStatusChange(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users blocked successfully",
    data: result,
  });
});

export const UserController = {
  createUser,
  getUsers,
  deleteUser,
  userStatusChange,
};
