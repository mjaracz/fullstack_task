import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {Users} from '../users/interfaces/users';
import {JwtService} from '@nestjs/jwt';
import * as bc from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> | null {
    const user = await this.usersService.findByUsername(username);
    const passIsMatch = bc.compareSync(pass, user.password)
    if (user && passIsMatch) {
      return user
    }
    return null;
  }

  async login(user: Users) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
