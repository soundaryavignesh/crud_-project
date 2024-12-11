import { Module } from '@nestjs/common';
import { AdminsigninService } from './adminsignin.service';
import { AdminsigninController } from './adminsignin.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  // imports:[AuthModule],
  controllers: [AdminsigninController],
  providers: [AdminsigninService,PrismaService],
  exports:[AdminsigninService]
})
export class AdminsigninModule {}
