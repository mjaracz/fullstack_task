import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Injectable} from '@nestjs/common';
import {Users} from './interfaces/users';
import {CreateUserDto} from './dto/create-user';
import * as bc from 'bcrypt';
import * as dotenv from 'dotenv';
import {UpdateUserDto} from "./dto/update--user";

@Injectable()
export class UsersService {
  private readonly saltRound: number;
  constructor(
    @InjectModel('Users')
    private readonly usersModel: Model<Users>
  ) {
    dotenv.config();
    this.saltRound = parseInt(process.env.SALT_ROUND);
  }

  async findByUsername(name: string): Promise<Users> {
    return this.usersModel.findOne({username: name}).exec();
  }

  async create(createUserDto: CreateUserDto) {
    const users = await this.usersModel.find().exec();
    const findUsers = users.find((user: Users) => user.username === createUserDto.username);

    if (!findUsers) {
      const hash = bc.hashSync(createUserDto.password, this.saltRound);
      const addedUser = new this.usersModel({
        userId: users.length,
        username: createUserDto.username,
        password: hash
      });
      return addedUser.save()
    }
    else {
      return {
        message: 'this username is occupied'
      }
    }
  }
  async update(updateUserDto: UpdateUserDto) {
    const user = await this.findByUsername(updateUserDto.username);
    if (user) {
      console.log(user)
      console.log('send email')
    }
    else {
      console.log('res status code 401, user not found')
    }
  }

  async deleteByIdOrName(id?: number, username?: string) {
    if (id)
      return this.usersModel.findOneAndDelete({ userId: id }).exec();
    if (username)
      return this.usersModel.deleteMany({ username: username }).exec();
  }
}
