import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  private logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    // this.logger.verbose(`${UserController.name} - createUser - controller`);
    // this.logger.verbose(`${createUserDto} - createUser - body`);
    // this.logger.verbose(`${JSON.stringify(createUserDto)} - createUser - body`);
    return this.userService.createUser(createUserDto.email, createUserDto.name);
  }

  @Post('/update')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(userId, updateUserDto);
  }
}
