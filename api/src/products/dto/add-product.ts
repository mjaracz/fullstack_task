import { ProductsTypeEnum } from '../interfaces/products-type.enum'
import { CurrencyEnum } from '../interfaces/currency.enum'

export class AddProductDto {
  readonly userId: number
  readonly name: string
  readonly price: number
  readonly quantity: number
  readonly currency: CurrencyEnum
  readonly type: ProductsTypeEnum
}
