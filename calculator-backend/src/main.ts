import { NestFactory } from '@nestjs/core';
import { CalculatorModule } from './calculator/calculator.module';
import { LoggingInterceptor } from './interceptors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CalculatorModule);
  app.enableCors();
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true,
    }),
  );
  await app.listen(3001);
}
bootstrap();
