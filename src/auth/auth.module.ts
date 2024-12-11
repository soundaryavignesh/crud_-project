import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserloginModule } from 'src/userlogin/userlogin.module';
import { AdminsigninModule } from 'src/adminsignin/adminsignin.module';

@Module({
  imports:[UserloginModule,AdminsigninModule,
    JwtModule.register({
      secret:'secret'
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService,JwtModule]
})
export class AuthModule {}
