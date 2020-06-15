import {ProductsCurrency} from '../interfaces/products-currency';
import {ProductsTypeEnum} from '../interfaces/products-type.enum';

export class AddProductDto {
  readonly productsId: number;
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
  readonly description: string;
  readonly currency: string;
  readonly type: ProductsTypeEnum;
}