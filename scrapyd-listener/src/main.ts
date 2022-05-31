import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let port = 3579
  console.log(`listening port ${port}`)
  await app.listen(port);
}
bootstrap();
