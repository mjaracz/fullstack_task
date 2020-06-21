import {PassportStrategy} from '@nestjs/passport';
import {ContextIdFactory, ModuleRef} from '@nestjs/core';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../auth.service';
import {Strategy} from 'passport-local';
import {localStrategyValidate} from "../types";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private moduleRef: ModuleRef
  ) {
    super({
      passReqToCallback: true
    });
  }

  async validate(request: Request, username: string, password: string): Promise<localStrategyValidate> {
    const contextId = ContextIdFactory.getByRequest(request);
    const authService = await this.moduleRef.resolve(AuthService, contextId);
    const user = await authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
