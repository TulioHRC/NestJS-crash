import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule); // Creates NestJS application
    app.listen(3000); // Sets the port of communication (just as Express)
}

bootstrap(); // bootstrap it's a pattern for the inicialization of the program