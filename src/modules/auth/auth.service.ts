import { Injectable } from '@nestjs/common';
import { RegisterAdminDto } from './auth.dto';

@Injectable()
export class AuthService {
  public async registerAdmin(payload: RegisterAdminDto) {
    return 'ok';
  }
}
