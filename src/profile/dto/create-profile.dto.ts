import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class Createuser{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    email:string
}

export class CreateProfileDto {
    @IsString()
    @IsNotEmpty()
    mobileNo:string

    @IsString()
    @IsNotEmpty()
    location:string
    
    @IsOptional()
    @IsNotEmpty()
    user:Createuser
}
