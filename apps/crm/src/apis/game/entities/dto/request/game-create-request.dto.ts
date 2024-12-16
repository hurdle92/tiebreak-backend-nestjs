import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";
import { Game } from "../../game.entity";
import { GameType } from "../../game-type.enum";
import { Match } from "../../../../match/entities/match.entity";

export class GameCreateRequestDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: "노트" })
  note: string;

  @IsEnum(GameType)
  @ApiProperty({
    description: "게임 유형",
    enum: GameType,
    default: GameType.DOUBLE,
  })
  game_type: GameType;

  toEntity(match): Game {
    const game = new Game();
    game.match = match;
    game.note = this.note;
    game.game_type = this.game_type;
    return game;
  }
}
