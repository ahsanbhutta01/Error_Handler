import type { Request, Response, NextFunction } from "express"
import ApiResponse from "./apiResponse"
import ApiError from "./apiError"

export default function asyncHandler(fn: (req: Request, res: Response, next?: NextFunction) => void) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (err) {
      if (err instanceof ApiError) {
        res
          .status(err.statusCode)
          .json(new ApiResponse(err.statusCode, err.message, null))
      }

    }
  }
} 