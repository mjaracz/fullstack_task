import {Body, Controller, Delete, Post, Put, Query, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user';
import {JwtGuard} from '../auth/quards/jwt.guard';
import {UpdateUserDto} from "./dto/update--user";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Put()
  async updateUser(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto)
  }

  @UseGuards(JwtGuard)
  @Delete()
  async removeUserByIdOrName(@Query('id') id: number, @Query('username') name: string) {
    return this.usersService.deleteByIdOrName(id, name);
  }
}
