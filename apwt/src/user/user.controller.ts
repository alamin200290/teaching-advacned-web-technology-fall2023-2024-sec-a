import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}
    
    @Get('all')
    getAlluser(){
        //console.log(this.userService.getAll());
        return this.userService.getAll();
    }

    @Get(':id')
    userId(@Param('id') id: string){
        return {user:{
            id: id
        }}
    }

    @Post('create')
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }

}
