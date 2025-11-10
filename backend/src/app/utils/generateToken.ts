import jwt from "jsonwebtoken";
import config from "../config";

export const generateToken = (payload: { email: string; role: string }) => {
  return jwt.sign(payload, config.token_secret, {
    expiresIn: "7d",
  });
};
