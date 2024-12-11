import { PartialType } from '@nestjs/mapped-types';
import {UserRegister } from './create-userlogin.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserloginDto extends PartialType(UserRegister) {

    @IsString()
    @IsNotEmpty()
    username?:string

    @IsString()
    @IsNotEmpty()
    password?:string
}
