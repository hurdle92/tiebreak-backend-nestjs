import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupApp, setupSwagger } from "./configs";
import { Logger, ValidationPipe } from "@nestjs/common";

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
    allowedHeaders: "*",
    origin: "*",
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  setupSwagger(app);
  await app.listen(PORT);

  Logger.log(`Server listening on port ${PORT}`);
}
bootstrap();
