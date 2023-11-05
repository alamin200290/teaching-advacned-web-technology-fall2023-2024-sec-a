import { Body, Controller, Get, Param, Post, Put, Delete} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get('getall')
    getAll() {
        return `All userlist`;
    }

    @Get(':id')
    userId(@Param('id') id:number){
        return this.userService.findOne(id);
    }

    @Post('create')
    create (@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }


    @Put('update/:id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto){
        return this.userService.update(id, updateUserDto);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.userService.delete(id);
    }
}
