import {Body, Controller, Delete, Get, Post, Query, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user';
import {JwtGuard} from '../auth/quards/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Delete()
  async removeUserByIdOrName(@Query('id') id: number, @Query('username') name: string) {
    return this.usersService.deleteByIdOrName(id, name);
  }
}
