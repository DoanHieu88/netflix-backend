import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterAdminDto } from 'src/modules/auth/auth.dto';
import { User, UserDocument } from 'src/schemas/user.schema';

export class UserRepository {
  constructor(@InjectModel(User.name) private AuthModel: Model<UserDocument>) {}
  public async registerAdmin(payload: RegisterAdminDto) {
    const newUser = new this.AuthModel(payload);
    return newUser.save();
  }
}
