import { NestFactory } from "@nestjs/core";
import { CrmModule } from "./crm.module";

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(CrmModule);
  await app.listen(PORT);
}
bootstrap();
