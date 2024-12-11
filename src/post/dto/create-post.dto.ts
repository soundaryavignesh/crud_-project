import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    content:string

    @IsString()
    @IsNotEmpty()
    title:string

    @IsOptional()
    userId:string


}
