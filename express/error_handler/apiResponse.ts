export default class ApiResponse<T = unknown> {
  readonly statusCode: number;
  readonly message: string | null;
  readonly success: boolean;
  readonly data?: T
  constructor(statusCode: number, message: string | null, data?: T, ) {
    this.statusCode = statusCode ?? 200;
    this.message = message ?? null;
    this.success = statusCode < 400;
    this.data = data
  }
} 