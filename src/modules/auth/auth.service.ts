import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { UserRepository } from 'src/repository/user.repository';
import { User, UserDocument } from 'src/schemas/user.schema';
import { RegisterAdminDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    // @InjectConnection() private connection: Connection,
    private userRepository: UserRepository,
  ) {}

  public async registerAdmin(payload: RegisterAdminDto) {
    const newUser = this.userRepository.registerAdmin(payload);
    return newUser;
  }
}
