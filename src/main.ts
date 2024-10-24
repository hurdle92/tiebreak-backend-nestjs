import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupApp } from "./configs/common";

async function bootstrap() {
  const PORT = 3000;

  const app = await NestFactory.create(AppModule);

  setupApp(app);

  await app.listen(PORT);

  console.info(`Server listening on port ${PORT}`);
}
bootstrap();
