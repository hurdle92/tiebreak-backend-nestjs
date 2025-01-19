import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Memo } from "./entities/memo.entity";
import { Repository } from "typeorm";

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
}
