import { generateToken } from "../../utils/generateToken";
import { User } from "../user/user.model";

/* eslint-disable @typescript-eslint/no-explicit-any */
const loginUser = async (payload: any) => {
  const { email, password } = payload;

  const isUserExist = await User.findOne({ email });

  if (!isUserExist) {
    throw new Error("User does not exist with this email");
  }

  if (isUserExist.password !== password) {
    throw new Error("Password is incorrect!");
  }

  if(isUserExist.status === "blocked"){
    throw new Error("Your account has been blocked. Please contact support!.");
  }

  const jwtPayload = {
    email: isUserExist.email,
    role: isUserExist.role,
  };

  const token = generateToken(jwtPayload);

  return {
    token,
  };
};

export const AuthService = {
  loginUser,
};
