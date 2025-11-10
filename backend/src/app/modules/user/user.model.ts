import mongoose, { Schema } from "mongoose";
import { TUser } from "./user.interface";
import { UserRole, UserStatus } from "./user.constant";

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true,  },
  role: { type: String, enum: Object.values(UserRole), default: UserRole.USER },
  status: {
    type: String,
    enum: Object.values(UserStatus),
    default: UserStatus.ACTIVE,
  },
});

export const User = mongoose.model<TUser>("User", userSchema);
