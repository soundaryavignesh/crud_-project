import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminsigninService } from './adminsignin.service';
import { CreateAdminsigninDto } from './dto/create-adminsignin.dto';
import { UpdateAdminsigninDto } from './dto/update-adminsignin.dto';

@Controller('adminsignin')
export class AdminsigninController {
  constructor(private readonly adminsigninService: AdminsigninService) {}

  @Post('register')
  create(@Body() createAdmin: CreateAdminsigninDto) {
    return this.adminsigninService.registeradmin(createAdmin);
  }

  @Get()
  findAll() {
    return this.adminsigninService.findAll();
  }

  @Get(':adminname')
  findOne(@Param('adminname') adminname: string) {
    return this.adminsigninService.findOne(adminname);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminsigninDto: UpdateAdminsigninDto) {
    return this.adminsigninService.update(id, updateAdminsigninDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsigninService.remove(id);
  }
}
