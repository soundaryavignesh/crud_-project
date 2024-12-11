import { IsNotEmpty, IsOptional, IsString } from "class-validator";
export class UserProfile{
    @IsString()
    @IsNotEmpty()
    mobileNo:string

    @IsString()
    @IsNotEmpty()
    location:string

}
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsOptional()
    @IsNotEmpty()
    profile:UserProfile

    @IsOptional()
    @IsNotEmpty()
    posts:UserPost[]


}

export class UserPost{
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    content:string

}
