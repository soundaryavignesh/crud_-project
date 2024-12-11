import { Injectable } from '@nestjs/common';
import { CreateAdminsigninDto } from './dto/create-adminsignin.dto';
import { UpdateAdminsigninDto } from './dto/update-adminsignin.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminsigninService {
  constructor(private readonly prisma:PrismaService){}
 
  async registeradmin(createAdmin:CreateAdminsigninDto){
    return await this.prisma.adminSignin.create({
      data:{
        adminname:createAdmin.adminname,
        password:createAdmin.password
      }
    })
  }

  async findAll() {
    return await this.prisma.adminSignin.findMany();
  }

 
  async findOne(adminname:string) {
    const admin = await this.prisma.adminSignin.findMany();
    return admin.find( admin =>admin.adminname === adminname);
  }

  async update(id:string, updateAdmin: UpdateAdminsigninDto) {
    return await this.prisma.adminSignin.update({
      where:{id},
      data:{
        adminname:updateAdmin.adminname,
        password:updateAdmin.password
      }
  })
}

 async remove(id: string) {
  if(id){
     await this.prisma.adminSignin.delete({
      where:{id}
  })
  return "name and password deleted successfully"
}else{
  return "provide id"
}
 }
}
