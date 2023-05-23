import { IsEmail, IsString } from 'class-validator';

export class RegisterUserDTO {
  @IsString()
  @IsEmail()
  email_address: string;

  @IsString()
  password: string;
}
