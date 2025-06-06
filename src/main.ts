import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('NESTJS_PORT') || 3000;
  console.log(`listening port ${port}`);
  await app.listen(port);
}
bootstrap();
