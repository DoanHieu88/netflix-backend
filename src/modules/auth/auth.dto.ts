import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterAdminDto {
  @ApiProperty({ description: 'email' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
