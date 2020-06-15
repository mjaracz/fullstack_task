import * as mongoose from 'mongoose';
import {CurrencyEnum} from '../interafaces/currency.enum';

export const CurrencySchema = mongoose.Schema({
  rate: [
    {[typeof CurrencyEnum]: Number}
  ],
  base: String,
  date: String
})