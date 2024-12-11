import { Injectable } from '@nestjs/common';
import {  UserRegister } from './dto/create-userlogin.dto';
import { UpdateUserloginDto } from './dto/update-userlogin.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserloginService {
  constructor(private readonly prisma:PrismaService){}
  
  async registeruser(userRegister:UserRegister){
    return await this.prisma.userSignin.create({
      data:{
        username:userRegister.username,
        password:userRegister.password
      }
    })
  }

  async findAll() {
    return await this.prisma.userSignin.findMany();
  }

  async findOne(username:string) {
    const users = await this.prisma.userSignin.findMany();
    return users.find( user =>user.username === username);
  }

  async update(id: string, updateUser: UpdateUserloginDto) {
    return await this.prisma.userSignin.update({
      where:{id},
      data:{
        username: updateUser.username,
        password: updateUser.password
      }
    });
  }

  async remove(id:string) {
    if(id){
     await this.prisma.userSignin.delete({
      where:{id}
    });
    return "deleted successfully"
  }else{
    return "id doesn't match"
  }
  }
}
