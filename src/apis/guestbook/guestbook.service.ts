import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Guestbook } from "./entities/guestbook.entity";
import { Repository } from "typeorm";
import { GuestbookResponseDto } from "./dto/response/guestbook-response.dto";
import { GuestbookCreateRequestDto } from "./dto/request/guestbook-create-request.dto";
import { GuestbookUpdateRequestDto } from "./dto/request/guestbook-update-request.dto";

@Injectable()
export class GuestbookService {
  constructor(
    @InjectRepository(Guestbook)
    private guestbookRepository: Repository<Guestbook>,
  ) {}

  async create(requestDto: GuestbookCreateRequestDto): Promise<Guestbook> {
    return await this.guestbookRepository.save(requestDto.toEntity());
  }

  async findAll(): Promise<GuestbookResponseDto[]> {
    const guestbooks = await this.guestbookRepository.find();
    return guestbooks.map((guestbook) => new GuestbookResponseDto(guestbook));
  }

  findOne(id: number) {
    return `This action returns a #${id} guestbook`;
  }

  async update(
    id: number,
    requestDto: GuestbookUpdateRequestDto,
  ): Promise<Guestbook> {
    const guestbook = await this.guestbookRepository.findOne({
      where: { id },
    });
    const { title, content } = requestDto;
    guestbook.update(title, content);
    return await this.guestbookRepository.save(guestbook);
  }

  async delete(id: number): Promise<void> {
    await this.guestbookRepository.delete(id);
  }
}
