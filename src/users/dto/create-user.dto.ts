import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";


export class CreateUserDto {
    @ApiProperty({example:'example@gmail.com', description: `User's email`})
    @IsString({message: 'Email must be string'})
    readonly email:string;
    
    @ApiProperty({example:'12345', description: `User's password`})
    @IsString({message: 'Password must be string'})
    @Length(4, 16, {message: 'Password must be greater than 4 less than 16'})
    readonly password:string;
}