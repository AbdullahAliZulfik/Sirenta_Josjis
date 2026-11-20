import {IsNotEmpty, IsString, Matches, matches} from 'class-validator';

export class LoginDto {
    @IsString()
    @Matches(/^\d+$/, { message: 'NIM harus berupa angka' })
    nim: string;

    @IsString()
    @IsNotEmpty({ message: 'Password tidak boleh kosong' })
    password: string;
}