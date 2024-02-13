import { Body, Controller, DefaultValuePipe, Get, Param, Patch, Post, Query, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./products.model";
import { ProductDTO } from "./DTO/products.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService) {}

    @Post()
    addProduct(@Body() body: ProductDTO) : {id: string} { // DTO requires some data structure
        const productId = this.productsService.addProduct(body.title, body.description, body.price);
        return {id: productId};
    }

    @Get()
    //getSpecificProduct(@Param('id') productId: string) : Product { // @Param use the "/", @Query "?"
    getProducts(@Query('id', new DefaultValuePipe("")) productId: string) {
        return this.productsService.getProducts(productId);
    }

    @Patch(":id")
    updateProduct(
        @Param('id') id: string, 
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('price') price: number
    ) : string {
        return this.productsService.updateProduct(id, title, description, price);
    }

    @Delete(":id")
    removeProduct(@Param('id') id: string) : string {
        return this.productsService.removeProduct(id);
    }
}