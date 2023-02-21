import { IsString } from "class-validator";

export class AddRoleDto {
    @IsString({message: 'Must be string'})
    readonly value: string;
    @IsString({message: 'Must be string'})
    readonly userId: string;
}