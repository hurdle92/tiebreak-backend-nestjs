import { Module } from "@nestjs/common";
import { BannersService } from "./banners.service";
import { BannersController } from "./banners.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Banners } from "./entities/banner.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Banners])],
  controllers: [BannersController],
  providers: [BannersService],
})
export class BannersModule {}
