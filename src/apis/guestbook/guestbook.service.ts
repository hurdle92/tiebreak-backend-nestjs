import { Injectable } from "@nestjs/common";
import { CreateGuestbookDto } from "./dto/create-guestbook.dto";
import { UpdateGuestbookDto } from "./dto/update-guestbook.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Guestbook } from "./entities/guestbook.entity";
import { Repository } from "typeorm";
import { GuestbookResponseDto } from "./dto/response/guestbook-response.dto";

@Injectable()
export class GuestbookService {
  constructor(
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>,
  ) {}
  create(createGuestbookDto: CreateGuestbookDto) {
    return "This action adds a new guestbook";
  }

  async findAll(): Promise<GuestbookResponseDto[]> {
    const guestbooks = await this.guestbookRepository.find();
    return guestbooks.map((guestbook) => GuestbookResponseDto.of(guestbook));
  }

  findOne(id: number) {
    return `This action returns a #${id} guestbook`;
  }

  update(id: number, updateGuestbookDto: UpdateGuestbookDto) {
    return `This action updates a #${id} guestbook`;
  }

  remove(id: number) {
    return `This action removes a #${id} guestbook`;
  }
}
