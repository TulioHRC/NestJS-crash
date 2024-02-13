import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model"; // Product class model
import { randomUUID } from "crypto";

@Injectable()
export class ProductsService {
    products: Product[] = [];

    addProduct(title: string, desc: string, price: number) {
        const newProductId = randomUUID();
        const newProduct = new Product(newProductId, title, desc, price);
        this.products.push(newProduct);

        return newProductId;
    }

    getProducts(productId: string) {
        if(productId) 
            return this.getProductById(productId);
        else 
            return this.getAllProducts();
    }

    updateProduct(productId: string, title: string, desc: string, price: number) {
        const productIndex = this.getProductIndexById(productId);
        const oldProduct = this.products[productIndex];
        const updatedProduct = {...oldProduct};
        
        // Optional
        if(title) updatedProduct.title = title;
        if(desc) updatedProduct.description = desc;
        if(price) updatedProduct.price = price;

        this.products[productIndex] = updatedProduct;

        return "Product updated.";
    }

    removeProduct(id: string) {
        const productIndex = this.getProductIndexById(id);
        this.products.splice(productIndex, 1);

        return "Product deleted.";
    }

    // Private methods

    private getAllProducts() {
        // return this.products; That is returning the pointer of products (so the controller will be able to modify products), instead:
        return [...this.products.map(product => ({...product}))]; // Copy of products (each product being a copy) Deep copy
    }

    private getProductById(productId: string) {
        const product = this.products.find(product => product.id == productId);
        if(!product)
            throw new NotFoundException("Could not find product."); // 404 error
        return {...product};
    }

    private getProductIndexById(productId: string) {
        const productIndex = this.products.findIndex(product => product.id==productId);
        if(productIndex == -1)
            throw new NotFoundException("Could not find product.");
        return productIndex;
    }
}