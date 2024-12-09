import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Match } from "./entities/match.entity";
import { Repository } from "typeorm";
import { MatchResponseDto } from "./entities/response/match-response.dto";

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private matchRepository: Repository<Match>,
  ) {}
  /**
   * 경기 모임 리스트롤 조회합니다.
   *
   * @returns {Promise<MatchResponseDto>}
   */
  async findMatchesByClubId(clubId: number): Promise<MatchResponseDto[]> {
    const matches = await this.matchRepository.find({
      where: { meeting: { club: { id: clubId } } },
      relations: {
        games: {
          teams: {
            players: {
              player_user_bridges: {
                user: true,
              },
            },
          },
        },
      },
    });
    const result = matches.map((match) => new MatchResponseDto(match));
    return result;
  }

  /**
   * 경기 상세 정보를 조회합니다.
   *
   * @returns {Promise<MatchResponseDto>}
   */
  async findMatchDetail(id: number): Promise<MatchResponseDto> {
    const match = await this.matchRepository.findOne({
      where: { id },
      relations: {
        meeting: true,
        games: {
          meeting_game_court_option: true,
          teams: {
            players: {
              player_user_bridges: {
                user: true,
              },
            },
          },
        },
      },
    });
    const result = new MatchResponseDto(match);
    return result;
  }
}
