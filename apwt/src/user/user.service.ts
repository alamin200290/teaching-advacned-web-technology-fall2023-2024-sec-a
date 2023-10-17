import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import {User} from './entities/user.model';

@Injectable()
export class UserService {
    users: User[] = [];
    create(createUserDto: CreateUserDto){
        //let userId = Math.random().toString();
        const newUser = new User(createUserDto.sName, createUserDto.sId, createUserDto.sEmail);
        this.users.push(newUser);
        return "New user created ... ";
    }

    getAll(){
       // console.log(this.users);
        return [...this.users];
    }
}

