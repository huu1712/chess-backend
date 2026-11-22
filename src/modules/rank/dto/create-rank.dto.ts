import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRankDto {
    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    label: string;

    @IsNumber()
    @IsNotEmpty()
    rating: number;
}
