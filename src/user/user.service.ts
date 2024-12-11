import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma:PrismaService){}
  async create(input: CreateUserDto) {
    return await this.prisma.user.create({
      data:{
        name:input.name,
        email:input.email,
        profile:{
          create:{
            mobileNo:input.profile.mobileNo,
            location:input.profile.location
          }
        }
      },
      include:{
        profile:true
      }
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      include:{
        profile:true
      }
    });
  }

  async findOne(id:string) {
    return await this.prisma.user.findUnique({
      where:{id},
      include:{
        profile:{
          where: {
            isActive:true
          },
          select:{
            mobileNo:true,
            location:true
          }
        } 
      }
    });
  }

  async update(id:string, profileId: string,updateUser: UpdateUserDto) {
    return  await this.prisma.user.update({
      where:{id},
      data:{
        name:updateUser.name,
          profile:{
            update: {
              where: { id: profileId },
              data: {
                mobileNo: updateUser.mobileNo, 
              }
      }
    }
  }})
  }

  async remove(id:string) {
     await this.prisma.user.delete({
      where:{id}
    });
    return "user deleted successfully"
  }
}
