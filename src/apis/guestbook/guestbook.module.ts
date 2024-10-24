import { Module } from "@nestjs/common";
import { GuestbookService } from "./guestbook.service";
import { GuestbookController } from "./guestbook.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Guestbook } from "./entities/guestbook.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Guestbook])],
  controllers: [GuestbookController],
  providers: [GuestbookService],
})
export class GuestbookModule {}
