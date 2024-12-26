import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse() as any;

    // 에러 메시지 형식 변환
    const formattedMessage = {};
    console.log(exceptionResponse.message);
    if (Array.isArray(exceptionResponse.message)) {
      exceptionResponse.message?.forEach((msg: any) => {
        Object.keys(msg).forEach((key) => {
          formattedMessage[key] = msg[key].matches;
        });
      });
    }

    response.status(status).json({
      code: status,
      error: exceptionResponse.error,
      messages: formattedMessage,
    });
  }
}
