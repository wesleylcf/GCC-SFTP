import { NestFactory } from '@nestjs/core';
import { MathModule } from './math/math.module';
import { LoggingInterceptor } from './interceptors';

async function bootstrap() {
  const app = await NestFactory.create(MathModule);
  app.enableCors();
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3001);
}
bootstrap();
