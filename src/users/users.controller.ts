import { Controller, Get, Post, Body, UsePipes, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidationPipe } from '../common/validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    private readonly logger = new Logger(UsersController.name);
    constructor(private readonly usersService: UsersService){}

    @Get()
    async findAll() {
        this.logger.log('Request to find all users');
        const users = await this.usersService.findAll();
        this.logger.log('The users were found');
        return users;
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createUser(@Body() createUserDto: CreateUserDto) {
        this.logger.log('Request to create user');
        return await this.usersService.createUser(createUserDto);
    }

}
