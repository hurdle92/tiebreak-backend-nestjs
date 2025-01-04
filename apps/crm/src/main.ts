import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupApp, setupSwagger } from "./configs";
import { BadRequestException, Logger, ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "./configs/filters/exception-filter";
import { ValidationError } from "class-validator";

async function bootstrap() {
  const PORT = 4000;

  const app = await NestFactory.create(AppModule);
  setupApp(app);

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
    next();
  });

  app.enableCors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "https://court-change.vercel.app",
    ],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  setupSwagger(app);
  await app.listen(PORT);

  Logger.log(`Server listening on port ${PORT}`);
}
bootstrap();
