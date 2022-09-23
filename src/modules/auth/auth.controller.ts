import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterAdminDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authServive: AuthService) {}

  @Post('register-admin')
  @ApiOperation({ summary: 'register-admin' })
  public async register(@Body() payload: RegisterAdminDto) {
    return this.authServive.registerAdmin(payload);
  }
}
