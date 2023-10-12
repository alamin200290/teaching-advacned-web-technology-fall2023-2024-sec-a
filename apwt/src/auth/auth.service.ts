import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService{

    signup(){
        return `Signup Done!`;
    }

    signin(){
        return `signin done!`;
    }
}