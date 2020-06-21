import {ProductsTypeEnum} from './products-type.enum';
import {ProductsCurrency} from './products-currency';

export interface Products {
  productsId: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  currency: ProductsCurrency;
  type: ProductsTypeEnum;
}