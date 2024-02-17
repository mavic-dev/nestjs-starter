import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { server } =
    app.get<ConfigService>(ConfigService)['internalConfig']['config'];

  await app.listen(server.port, () => {
    Logger.log(`App running on port : ${server.port}`);
  });
}
bootstrap();
