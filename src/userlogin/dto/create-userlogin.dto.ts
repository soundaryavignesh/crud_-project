import { IsNotEmpty, IsString } from "class-validator";

export class UserRegister{
    @IsString()
    @IsNotEmpty()
    username:string

    @IsString()
    @IsNotEmpty()
    password:string
}
