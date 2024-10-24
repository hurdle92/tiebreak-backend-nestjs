import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupApp, setupSwagger } from "./configs/common";
import helmet from "helmet";

async function bootstrap() {
  const PORT = 3000;

  const app = await NestFactory.create(AppModule);

  setupApp(app);

  app.use(helmet());
  app.enableCors();

  setupSwagger(app);

  await app.listen(PORT);

  console.info(`Server listening on port ${PORT}`);
}
bootstrap();
