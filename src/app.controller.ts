import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('api') // Here you can define the your-domain.com/before-module.../path http request response
export class AppController {
    constructor(private readonly appService : AppService ) {} // Dependency Injection

    @Get('hello') // That's not extremely clean code, api/hello it's not that good
    getHello() : string {
        return this.appService.getHello();
    }
}