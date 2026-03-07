export default class ApiError<T> extends Error {
  readonly statusCode: number;
  readonly errors?: T;
  readonly success: boolean

  constructor(statusCode: number = 500, message: string = "Something went wrong", errors?: T) {
    super(message)
    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false;

    if(Error.captureStackTrace){
      Error.captureStackTrace(this, this.constructor)
    }
  }
} 