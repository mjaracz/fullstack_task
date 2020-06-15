import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CurrencyController} from './currency.controller';
import {CurrencyService} from './currency.service';
import {CurrencySchema} from './schema/currency';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Currency', schema: CurrencySchema, collection: 'Currency'}])
  ],
  controllers: [CurrencyController],
  providers: [CurrencyService]
})
export class CurrencyModule {}
