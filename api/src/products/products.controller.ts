import {Body, Controller, Delete, Get, ParseIntPipe, Post, Query, UseGuards} from '@nestjs/common';
import {ProductsService} from './products.service';
import {AddProductDto} from './dto/add-product';
import {JwtGuard} from '../auth/quards/jwt.guard';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get()
  getAllProducts() {
    return this.productsService.findAll()
  }
  @Get('particular')
  getParticularProduct(
    @Query('type') type?: string,
    @Query('name') name?: string,
    @Query('id') productId?: number,
    @Query('user') userId?: number,
  ) {
    return this.productsService.findParticular({type, productId, userId, name});
  }

  @UseGuards(JwtGuard)
  @Post()
  addProduct(@Body() addProductDto: AddProductDto) {
    return this.productsService.addProduct(addProductDto)
  }

  @UseGuards(JwtGuard)
  @Delete()
  deleteProductByName(
    @Query('user', ParseIntPipe) userId: number,
    @Query('product', ParseIntPipe) productId
  ) {
    return this.productsService.deleteProductByNameOrId(userId, productId);
  }
}
