import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Logger,
  UnprocessableEntityException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 8086;

  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
  });

  app.useGlobalPipes(
    new ValidationPipe({
      validationError: {
        target: false,
      },

      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        return new UnprocessableEntityException(errors);
      },
    }),
  );

  await app.listen(port, () => console.log(`server running on port ${port}`));
}
bootstrap();
