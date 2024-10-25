import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { CourtsService } from "./courts.service";
import { CreateCourtDto } from "./dto/create-court.dto";
import { UpdateCourtDto } from "./dto/update-court.dto";
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { Response } from "express";
import { CourtMessage } from "./courts.message";

@Controller({ path: "courts" })
@ApiTags("코트 API")
export class CourtsController {
  constructor(private readonly courtsService: CourtsService) {}

  @Post()
  create(@Body() createCourtDto: CreateCourtDto) {
    return this.courtsService.create(createCourtDto);
  }

  @Get(":id")
  @ApiOperation({ summary: "코트 정보 상세 조회" })
  @ApiOkResponse({
    description: "id가 일치하는 코트 정보를 조회한다.",
  })
  async findOne(
    @Param("id", new ParseIntPipe()) id: number,
    @Res() res: Response,
  ) {
    const court = await this.courtsService.findOne(id);
    return res.status(HttpStatus.OK).json({
      code: 200,
      message: CourtMessage.DETAIL,
      data: court,
    });
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCourtDto: UpdateCourtDto) {
    return this.courtsService.update(+id, updateCourtDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.courtsService.remove(+id);
  }
}
