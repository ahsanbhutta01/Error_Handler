import type { Request, Response, NextFunction } from "express"

export default function asyncHandler(fn: (req: Request, res: Response, next?: NextFunction) => Promise<void>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}