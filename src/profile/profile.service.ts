import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma:PrismaService){}
  async create(input: CreateProfileDto) {
    return  await this.prisma.profile.create({
      data:{
            mobileNo:input.mobileNo,
            location:input.location,
            user:{
              create:{
                name:input.user.name,
                email:input.user.email
              }
            }
          },
          include:{
            user:true
          }
  })
}

  async findAll() {
    return await this.prisma.profile.findMany({
      include:{
        user:true
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.profile.findUnique({
      where:{id},
      include:{
        user:{
          where: {
            isActive:true
          },
          select:{
            name:true,
            email:true
          }
        } 
      }
    });
  }

  async update(id: string,userId:string, updateProfile: UpdateProfileDto) {
    return await this.prisma.profile.update({
      where:{id},
      data:{
        mobileNo:updateProfile.mobileNo,
            user:{
              update: {
                where: { id: userId },
                data: {
                  name: updateProfile.name, 
                }
        }
      }
    }})
      }

  async remove(id: string) {
    if(id)
    await this.prisma.profile.delete({
      where:{id}
    });
    return " Profile deleted successfully"
  }
}
