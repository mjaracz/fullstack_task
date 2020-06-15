import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Products} from './interfaces/products';
import {FindProductDto} from "./dto/find-product";
import {AddProductDto} from "./dto/add-product";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<Products>
  ) {}

  async findAll() {
    return this.productsModel.find().exec();
  }
  async findByNameOrId(findProductDto: FindProductDto) {
    if (findProductDto.name)
      return this.productsModel.find({name: findProductDto.name}).exec();
    if (findProductDto.productId)
      return this.productsModel.find({productId: findProductDto.productId}).exec();
  }

  async addProduct(addProductDto: AddProductDto) {
    const prevProduct = await this.productsModel.find({}).exec();
    const createProducts = new this.productsModel({
      ...prevProduct,
      addProductDto
    })
    return createProducts.save();
  }

  async deleteProductByName(name: string) {
    return this.productsModel.findOneAndDelete({name: name}).exec();
  }
}
