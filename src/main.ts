import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupApp, setupSwagger } from "./configs/common";
import helmet from "helmet";
import { Logger, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const PORT = 3000;

  const app = await NestFactory.create(AppModule);
  setupApp(app);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  setupSwagger(app);

  await app.listen(PORT);

  Logger.log(`Server listening on port ${PORT}`);
}
bootstrap();
