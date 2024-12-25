import { Module } from "@nestjs/common";
import { AssignmentService } from "./assignment.service";
import { AssignmentController } from "./assignment.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssignmentRegion } from "./entity/region.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AssignmentRegion])],
  controllers: [AssignmentController],
  providers: [AssignmentService],
})
export class AssignmentModule {}
