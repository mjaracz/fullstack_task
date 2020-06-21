import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}),
    AuthModule,
    UsersModule,
    ProductsModule
  ],
  controllers: [AppController],
})
export class AppModule {}
