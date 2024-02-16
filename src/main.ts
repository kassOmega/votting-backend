import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ methods: ['PUT', 'GET', 'PATCH', 'POST', 'OPTIONS'] });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(3002);
}
bootstrap();
