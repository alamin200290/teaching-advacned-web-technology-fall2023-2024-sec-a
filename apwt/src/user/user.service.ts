import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
//import {User} from './entities/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entinty';
import { UpdateUserDto } from './dto/updateUserDto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>){

    }
    //users: User[] = [];
    // create (createUserDto: CreateUserDto){
    //     let userId = Math.random().toString(); 
    //     const newUser = new User(createUserDto.name, userId, createUserDto.email);
    //     this.users.push(newUser);
    //     return userId;
    // }

    async findOne(id: number){
        return await this.userRepo.findOne({where: {id:id}});
    }

    async create(createUserDto: CreateUserDto){
        
        const user = await this.userRepo.create(createUserDto);
        return await this.userRepo.save(user);
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        return await this.userRepo.update(id, updateUserDto);
    }

    async delete(id: number){
        return await this.userRepo.delete(id)
    }
}
