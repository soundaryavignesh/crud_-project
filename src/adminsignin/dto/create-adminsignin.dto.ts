import { IsNotEmpty, IsString } from "class-validator"

export class CreateAdminsigninDto {
    @IsString()
    @IsNotEmpty()
    adminname:string

    @IsString()
    @IsNotEmpty()
    password:string
}
