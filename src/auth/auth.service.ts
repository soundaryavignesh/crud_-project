import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsigninService } from 'src/adminsignin/adminsignin.service';
import { Role } from 'src/role/role.enum';
import { UserloginService } from 'src/userlogin/userlogin.service';

@Injectable()
export class AuthService {
    constructor(private userloginService:UserloginService,private adminsignin:AdminsigninService,private jwtService: JwtService){}

   async signIn(username:string,password:string): Promise<{access_token:string}> {

    const user = await this.userloginService.findOne(username);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const roles = [Role.user];
    const payload = { sub: user.id, username: user.username,roles:roles};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }  
  async adminSignIn(adminname:string,password:string): Promise<{access_token:string}> {

    const admin = await this.adminsignin.findOne(adminname);
    if (admin?.password !== password) {
      throw new UnauthorizedException();
    }
    const roles = [Role.admin];
    const payload = { sub:admin.id, adminname: admin.adminname,roles:roles};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }  
}
