import {Injectable, UnauthorizedException} from '@nestjs/common';
import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {AuthService} from '../auth.service';
import {ContextIdFactory, ModuleRef} from '@nestjs/core';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private moduleRef: ModuleRef
  ) {
    super({
      passReqToCallback: true
    });
  }

  async validate(
    request: Request,
    username: string,
    password: string
  ): Promise<{userId: number, username: string}> {
    const contextId = ContextIdFactory.getByRequest(request);
    const authService = await this.moduleRef.resolve(AuthService, contextId)
    const user = await authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
