import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/role/role.guard';
import { Roles } from 'src/role/role.decorator';
import { Role } from 'src/role/role.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.user) 
  @Post('createuser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.admin)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.admin) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.user) 
  @Put(':id/profile/:profileId')
  update(@Param('id') id: string, @Param('profileId') profileId: string,@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id,profileId, updateUserDto);
  }

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.user) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
