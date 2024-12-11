import { Controller, Get, Post, Body, Patch, Param, Delete ,Put, UseGuards} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/role/role.guard';
import { Roles } from 'src/role/role.decorator';
import { Role } from 'src/role/role.enum';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.user) 
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }
  
  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.admin)
  @Get()
  findAll() {
    return this.profileService.findAll();
  }
  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.admin)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.user) 
  @Put(':id/user/userId')
  update(@Param('id') id: string,@Param('userId') userId: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(id,userId, updateProfileDto);
  }

  @UseGuards(AuthGuard,RolesGuard)
  @Roles(Role.user) 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
