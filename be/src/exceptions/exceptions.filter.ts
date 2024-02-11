import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    
    let message = 'Internal server error';
    if (exception instanceof HttpException) {
      message = exception.getResponse()['message'] || exception.getResponse();
    }

    if (exception instanceof TypeError) {
      console.log('TypeError:', exception);
    }
    

    response.status(status).json({
      statusCode: status,
      message: message,
      customData: 'An error occurred while processing the request. Please try again later.',
    });
  }
}
