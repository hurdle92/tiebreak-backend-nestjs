import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmModuleOptions } from "./database/typeorm.config";
import { HealthModule } from "./apis/health/health.module";
import { UserModule } from "./apis/user/user.module";
import { AuthModule } from "./apis/auth/auth.module";
import { ClubModule } from "./apis/club/club.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    HealthModule,
    UserModule,
    AuthModule,
    ClubModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
