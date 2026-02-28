import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Seguro Carro')
    .setDescription('Pojeto Seguro Carro')
    .setContact(
      'Grupo 05 - Andreza Luiza, Beatriz Monteiro, Cesar Souza, João Henrique, Josenil Soares, Raylander Ribeiro, Stephanie Mayara',
      'https://github.com/Grupo-05-Turma-Javascript-12',
      'generationjs12gp05@gmail.com',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  process.env.TZ = '-03:00';
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
