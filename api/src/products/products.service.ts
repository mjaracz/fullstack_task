import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Products} from './interfaces/products';
import {AddProductDto} from './dto/add-product';
import {CurrencyProvider} from './providers/currency';
import {ProductsQuery} from './interfaces/products.query';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<Products>,
    private readonly currencyProvider: CurrencyProvider
  ) {}

  async findAll() {
    return this.productsModel.find().exec();
  }
  async findParticular(reqQuery: ProductsQuery) {
    if (reqQuery) {
      const dbQuery: ProductsQuery = {};
      Object.keys(reqQuery).forEach(key => {
        reqQuery[key] && (dbQuery[key] = reqQuery[key])
      });
      return this.productsModel.find(dbQuery).exec();
    }
    return {
      message: 'one of the query parameters ( type?: string; user?: string; id?: number, name?: string ) is required'
    }
  }

  async addProduct(addProductDto: AddProductDto) {
    const products = await this.productsModel.find().exec();
    await this.currencyProvider.updateCurrency(addProductDto.currency)

    const createProducts = new this.productsModel({
      productId: products.length,
      ...addProductDto,
      currency: this.currencyProvider.productsCurrency,
    })
    return createProducts.save();
  }

  async deleteProductByNameOrId(userId?: number, productId?: number) {
    return productId
      ? this.productsModel.findOneAndDelete({productId: productId}).exec()
      : this.productsModel.findOneAndDelete({userId: userId}).exec();
  }
}
