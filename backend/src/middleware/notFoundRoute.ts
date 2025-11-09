import { NextFunction, Request, Response } from "express";
import status from "http-status";

const notFoundRoute = (req: Request, res: Response, next: NextFunction) => {
  const statusCode = status.NOT_FOUND;
  const message = "API not found!";

  res.status(statusCode).json({
    success:false,
    message,
    error: "",
  });

  return;
};

export default notFoundRoute;
