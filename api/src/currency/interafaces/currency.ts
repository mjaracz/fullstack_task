import {CurrencyEnum} from './currency.enum';

export interface Currency {
  rates: CurrencyEnum,
  base: string,
  date: string
}