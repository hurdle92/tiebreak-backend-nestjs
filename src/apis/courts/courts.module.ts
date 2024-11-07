import { Module } from "@nestjs/common";
import { CourtsService } from "./courts.service";
import { CourtsController } from "./courts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Courts } from "./entities/court.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Courts])],
  controllers: [CourtsController],
  providers: [CourtsService],
})
export class CourtsModule {}
