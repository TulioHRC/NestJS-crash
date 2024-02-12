import { Injectable } from "@nestjs/common";
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

    getAllProducts() {
        // return this.products; That is returning the pointer of products (so the controller will be able to modify products), instead:
        return [...this.products.map(product => ({...product}))]; // Copy of products (each product being a copy) Deep copy
    }
}