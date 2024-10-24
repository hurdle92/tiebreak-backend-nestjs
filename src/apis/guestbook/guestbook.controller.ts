import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { GuestbookService } from "./guestbook.service";
import { CreateGuestbookDto } from "./dto/create-guestbook.dto";
import { UpdateGuestbookDto } from "./dto/update-guestbook.dto";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { GuestbookMessage } from "./guestbook.message";

@Controller({ path: "guestbook" })
@ApiTags("방명록 API")
export class GuestbookController {
  constructor(private readonly guestbookService: GuestbookService) {}

  @Get()
  @ApiOperation({ summary: "모든 방명록 조회" })
  @ApiOkResponse({ description: "모든 방명록을 조회합니다." })
  async findAll(@Res() res) {
    const guestbooks = await this.guestbookService.findAll();

    return res.status(HttpStatus.OK).json({
      statusCode: 200,
      message: GuestbookMessage.GET_ALL_GUESTBOOKS,
      data: guestbooks,
    });
  }

  @Post()
  create(@Body() createGuestbookDto: CreateGuestbookDto) {
    return this.guestbookService.create(createGuestbookDto);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.guestbookService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateGuestbookDto: UpdateGuestbookDto,
  ) {
    return this.guestbookService.update(+id, updateGuestbookDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.guestbookService.remove(+id);
  }
}
