import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor() {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const requestReceivedDateTime = new Date();
    console.log(
      `(Request)\t${req.method}\t${req.path}\t${requestReceivedDateTime.toISOString()}\n\tbody: ${JSON.stringify(req.body)}\n\tuser: ${JSON.stringify(
        req.user,
      )},\n\tsession: ${JSON.stringify(req.session)}`,
    );

    return next.handle().pipe(
      tap((data) => {
        const { statusCode } = context.switchToHttp().getResponse();
        const replySentDateTime = new Date();
        console.log(
          `(Response: ${Number(replySentDateTime) - Number(requestReceivedDateTime)}ms)\t${req.method}\t${req.path}\t${replySentDateTime.toISOString()}\n\t${JSON.stringify({ statusCode, error: data?.error || '', data })}`,
        );
      }),
    );
  }
}
