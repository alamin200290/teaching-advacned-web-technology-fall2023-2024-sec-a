import { IsString, IsNumber, IsEmail } from "class-validator";

export class UpdateUserDto{

    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}