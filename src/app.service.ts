import { Injectable } from "@nestjs/common";

@Injectable() // For the use of this dependency
export class AppService {
    // Here we apply the all logic (that can also be modularize)
    getHello() : string {
        return 'Hello World!';
    }
}