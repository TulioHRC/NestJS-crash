import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./products.model";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService) {}

    @Post()
    addProduct(
        @Body('title') productTitle: string, 
        @Body('description') productDesc: string, 
        @Body('price') productPrice: number
    ) : {id: string} {
        const productId = this.productsService.addProduct(productTitle, productDesc, productPrice);
        return {id: productId};
    }

    @Get()
    getAllProducts() : Product[] {
        return this.productsService.getAllProducts();
    }
}