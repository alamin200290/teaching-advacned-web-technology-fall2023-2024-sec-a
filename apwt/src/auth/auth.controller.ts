import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{

    constructor(private AuthService: AuthService){}

    @Get('signup')
    signup(){
        return this.AuthService.signup();
    }

    @Get('signin')
    signin(){
        return this.AuthService.signin();
    }
}