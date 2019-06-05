import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly first_name: string;

  @IsNotEmpty()
  readonly last_name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MaxLength(150)
  readonly avatar: string;

}
