import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example:'example@gmail.com', description: `User's email`})
    readonly email:string;
    
    @ApiProperty({example:'12345', description: `User's password`})
    readonly password:string;
}