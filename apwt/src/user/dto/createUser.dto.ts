import { IsString, IsEmail, IsNumber } from "class-validator";

export class CreateUserDto{

    @IsString()
    sName: string;

    @IsNumber()
    sId: number;

    @IsEmail()
    sEmail: string;
}