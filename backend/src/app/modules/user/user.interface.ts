import { UserRole, UserStatus } from "./user.constant";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
};
