import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth/auth.service';
import { RegisterUserDTO } from '../dtos/register-user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService) private userService: UserService,
    @Inject(AuthService) private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() body: RegisterUserDTO) {
    return await this.authService.register(body);
  }
}
