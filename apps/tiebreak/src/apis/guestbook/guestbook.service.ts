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

  /**
   * 방명록을 생성한다.
   *
   * @returns {Promise<GuestbookResponseDto>}
   */
  async create(requestDto: GuestbookCreateRequestDto): Promise<Guestbook> {
    return await this.guestbookRepository.save(requestDto.toEntity());
  }

  /**
   * 모든 방명록 정보를 조회한다.
   *
   * @returns {Promise<GuestbookResponseDto[]>}
   */
  async findAll(): Promise<GuestbookResponseDto[]> {
    const guestbooks = await this.guestbookRepository.find();
    return guestbooks.map((guestbook) => new GuestbookResponseDto(guestbook));
  }

  findOne(id: number) {
    return `This action returns a #${id} guestbook`;
  }

  /**
   * id에 해당하는 방명록을 수정한다.
   *
   * @returns {Promise<Guestbook>}
   */
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

  /**
   * id에 해당하는 방명록을 삭제한다.
   *
   * @returns {Promise<void>}
   */
  async delete(id: number): Promise<void> {
    await this.guestbookRepository.delete(id);
  }
}
