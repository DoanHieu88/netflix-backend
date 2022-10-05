import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CONNECT_MOGO } from './connectDB/connection';

@Module({
  imports: [
    MongooseModule.forRoot(
      CONNECT_MOGO,
      // { connectionName: 'user' },
    ),
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
  exports: [AppService, AuthService],
})
export class AppModule {}
