/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "./user.model";

const createUserIntoDB = async (payload: any) => {
  const isUserExist = await User.findOne({ email: payload.email });

  if (isUserExist) {
    throw new Error("User already exist with this email!");
  }

  const user = (await User.create(payload));

  return user;
};

const getUserFromDB = async () => {
  const users = await User.find();
  return users;
};

const deleteUserFromDB = async (id: string | undefined) => {
  const isUserExist = await User.findByIdAndDelete(id);

  if (!isUserExist) {
    throw new Error("User not found with this id!");
  }

  return {
    message: "User deleted successfully",
  };
};

const userStatusChange = async (id: string | undefined) => {
  const isUserExist = await User.findByIdAndUpdate(
    id,
    {
      status: "blocked",
    },
    { new: true }
  );

  if (!isUserExist) {
    throw new Error("User not found with this id!");
  }

  return {
    message: "User blocked successfully!",
    user: isUserExist,
  };
};

export const UserService = {
  createUserIntoDB,
  getUserFromDB,
  deleteUserFromDB,
  userStatusChange,
};
