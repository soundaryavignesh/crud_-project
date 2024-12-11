import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { UserloginModule } from './userlogin/userlogin.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { AdminsigninModule } from './adminsignin/adminsignin.module';

@Module({
  imports: [UserModule, ProfileModule, PostModule, UserloginModule, AuthModule, RoleModule, AdminsigninModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
