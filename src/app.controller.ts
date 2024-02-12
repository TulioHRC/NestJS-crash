import { Controller, Get, Header } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('api') // Here you can define the your-domain.com/before-module.../path http request response
export class AppController {
    constructor(private readonly appService : AppService ) {} // Dependency Injection

    @Get('hello') // That's not extremely clean code, api/hello it's not that good
    getHello() : string { // Auto sets content-type to text/html (or the other type you're using)
        return this.appService.getHello();
    }

    @Get('object')
    @Header('Content-Type', 'text/html') // Pre-set content-type
    getObject() : {name: string} {
        return this.appService.getObject();
    }
}