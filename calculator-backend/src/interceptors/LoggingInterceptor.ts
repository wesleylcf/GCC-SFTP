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
    console.log(
      `(Request) ${req.method} ${req.path}\n\tbody: ${JSON.stringify(req.body)}\n\tuser: ${JSON.stringify(
        req.user,
      )},\n\tsession: ${JSON.stringify(req.session)}`,
    );
    const now = Date.now();

    return next.handle().pipe(
      tap((data) => {
        const { statusCode } = context.switchToHttp().getResponse();
        console.log(
          `(Response: ${Date.now() - now}ms) ${req.method} ${req.path}\n\t${JSON.stringify({ statusCode, error: data?.error || '', data })}`,
        );
      }),
    );
  }
}
