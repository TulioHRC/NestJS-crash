import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [], // Modules (modularity)
  controllers: [AppController], // Handlers of http requests
  providers: [AppService] // All funcionalities
})
export class AppModule {} // NestJS does magic here to transform the class AppModule into a module using the decorator
