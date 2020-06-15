import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestFastifyApplication} from '@nestjs/platform-fastify';
import {fastifyAdapterRegister} from './common/fastifyAdapter';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapterRegister,
    { cors: true }
  );
  await app.listen(3000);
}

bootstrap();
