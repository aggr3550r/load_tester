import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidTokenException extends HttpException {
  constructor(message?: string, status?: HttpStatus) {
    message = message || 'Token is invalid or expired.';
    status = status || HttpStatus.NOT_ACCEPTABLE;
    super(message, status);
  }
}
