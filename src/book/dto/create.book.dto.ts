import {
  IsString,
  IsNotEmpty,
  IsOptional,
  MinLength,
  MaxLength,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CreateBookDto {
  @IsString({ message: 'O título deve ser uma string.' })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  @MinLength(2, { message: 'O título deve ter no mínimo 2 caracteres.' })
  @MaxLength(100, { message: 'O título deve ter no máximo 100 caracteres.' })
  title: string;

  @IsString({ message: 'A descrição deve ser uma string.' })
  @IsOptional()
  @MinLength(10, { message: 'A descrição deve ter no mínimo 10 caracteres.' })
  @MaxLength(500, { message: 'A descrição deve ter no máximo 500 caracteres.' })
  description?: string;

  @IsInt({ message: 'O ano deve ser um número inteiro.' })
  @Min(1000, { message: 'Ano inválido. Use um valor maior que 1000.' })
  @IsNotEmpty({ message: 'O ano é obrigatório.' })
  @Max(new Date().getFullYear(), { message: 'O ano não pode ser no futuro.' })
  year: number;


  @IsString({ message: 'O autor deve ser uma string.' })
  @IsNotEmpty({ message: 'O autor é obrigatório.' })
  @MinLength(2, { message: 'O nome do autor deve ter no mínimo 2 caracteres.' })
  @MaxLength(100, { message: 'O nome do autor deve ter no máximo 100 caracteres.' })
  author: string;
}

