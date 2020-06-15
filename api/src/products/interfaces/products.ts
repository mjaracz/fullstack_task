import {CurrencyEnum} from '../../currency/interafaces/currency.enum';
import {ProductsTypeEnum} from './products-type.enum';

export interface Products {
  productsId: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  currency: CurrencyEnum;
  type: ProductsTypeEnum;
}