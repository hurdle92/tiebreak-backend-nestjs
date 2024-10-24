import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { setupApp } from "./configs/common";
import { ConfigService } from "./configs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  setupApp(app);

  const port = configService.get("PORT");

  await app.listen(3000);

  console.info(`Server listening on port ${port}`);
}
bootstrap();
