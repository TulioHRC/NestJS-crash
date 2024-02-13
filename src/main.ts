import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule); // Creates NestJS application
    app.useGlobalPipes(new ValidationPipe()); // Prevents the application from receiving incorrect data
    app.listen(3000); // Sets the port of communication (just as Express)
}

bootstrap(); // bootstrap it's a pattern for the inicialization of the program