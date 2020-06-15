import {Body, Controller, Delete, Get, Param, Post, Query} from '@nestjs/common';
import {ProductsService} from './products.service';
import {AddProductDto} from './dto/add-product';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.findAll()
  }

  @Post()
  addProduct(@Body() addProductDto: AddProductDto) {
    return this.productsService.addProduct(addProductDto)
  }

  @Delete()
  deleteProductByName(@Query('name') name: string) {
    return this.productsService.deleteProductByName(name);
  }
}
