import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Memo } from "./entities/memo.entity";
import { Repository } from "typeorm";
import { MemoUpdateRequestDto } from "./entities/dtos/memo-update-request.dto";
import { MemoCreateRequestDto } from "./entities/dtos/memo-create-request.dto";

@Injectable()
export class MemoService {
  constructor(
    @InjectRepository(Memo)
    private memoRepository: Repository<Memo>,
  ) {}
  async findMemos() {
    const memos = await this.memoRepository.find({ order: { id: "ASC" } });
    return memos;
  }

  async findMemoById(id: number) {
    const memo = await this.memoRepository.findOne({ where: { id } });
    return memo;
  }

  async update(id: number, requestDto: MemoUpdateRequestDto) {
    const memo = await this.memoRepository.findOne({
      where: { id },
    });
    const { title, description } = requestDto;
    memo.update(title, description);
    return await this.memoRepository.save(memo);
  }

  async create(requestDto: MemoCreateRequestDto) {
    return await this.memoRepository.save(requestDto.toEntity());
  }

  async delete(id: number): Promise<void> {
    await this.memoRepository.delete(id);
  }
}
