import { IsNotEmpty } from "class-validator";

export class ProductDTO {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;
}