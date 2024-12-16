import { Controller } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";

@Controller("user")
@ApiTags("유저 API")
export class UserController {
  constructor(private readonly userService: UserService) {}
}
