import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserloginService } from './userlogin.service';
import {  UserRegister } from './dto/create-userlogin.dto';
import { UpdateUserloginDto } from './dto/update-userlogin.dto';

@Controller('userlogin')
export class UserloginController {
  constructor(private readonly userloginService: UserloginService) {}

  
  @Post('register')
  registeruser(@Body() userRegister: UserRegister) {
    return this.userloginService.registeruser(userRegister);
  }

  @Get()
  findAll() {
    return this.userloginService.findAll();
  }

  @Get(':username')
  findOne(@Param('username')username: string) {
    return this.userloginService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserloginDto: UpdateUserloginDto) {
    return this.userloginService.update(id, updateUserloginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userloginService.remove(id);
  }
}
