import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './DTO/createUserDto.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post("login")
  async login(@Body() user){ 
    return this.authService.login(user)
  }

  
  @Post("register")
  async register(@Body() user: CreateUserDto){
    return this.authService.register(user)
  }
}
