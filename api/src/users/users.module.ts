import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersService} from './users.service';
import {UsersSchema} from './schema/users';
import {UsersController} from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Users', schema: UsersSchema, collection: 'Users'}])
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
