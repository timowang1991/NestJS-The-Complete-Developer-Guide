import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import cookieSession from 'cookie-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({ keys: ['asdasds'] }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // only allow whatever is defined in the dto to pass through, additional properties are stripped out
    }),
  );
  await app.listen(3000);
}
bootstrap();
