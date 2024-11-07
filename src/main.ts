/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule}  from '@nestjs/swagger';
import * as bodyParser from 'body-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('TestLab')
      .setDescription('This project is dedicated to list all possible test scenarios for a given swagger documentation and a given endpoint.')
      .setVersion('1.0.0')
      .build();

      const document = SwaggerModule.createDocument(app, config)
      SwaggerModule.setup('api', app, document);

      app.use(bodyParser.text({ limit: '10mb' }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
