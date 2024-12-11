import { Module } from '@nestjs/common';
import { UserloginService } from './userlogin.service';
import { UserloginController } from './userlogin.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserloginController],
  providers: [UserloginService,PrismaService],
  exports:[UserloginService]
})
export class UserloginModule {}
