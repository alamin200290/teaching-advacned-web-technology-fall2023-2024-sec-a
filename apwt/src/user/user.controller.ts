import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { get } from 'http';

@Controller('user')
export class UserController {

    constructor(private UserService: UserService){}

    @Get('getall')
    getAll() {
        return `All userlist`;
    }

    @Get(':id')
    userId(@Param('id') id:string){

        return `Your user id is ${id}`;
    }

    @Post('create')
    create (@Body() Body: any){
        return Body;
    }
}
