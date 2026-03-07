
import type { Request, Response, NextFunction } from "express"
import ApiError from "./apiError"
import ApiResponse from "./apiResponse"
export default function GlobalErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ApiError) {
    res.status(500).json(new ApiResponse(error.statusCode, error.message, null))
  }else{
    res.status(500).json(new ApiResponse(500, error.message ?? "Internal Server Error"))
  }
} 