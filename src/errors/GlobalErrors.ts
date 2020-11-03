import { Request, Response, NextFunction } from "express";
import AppError from "./AppError";

export default function GlobalError(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}
