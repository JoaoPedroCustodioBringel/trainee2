import {
  IsString,
  IsOptional,
  MinLength,
  MaxLength,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString({ message: 'O título deve ser uma string.' })
  @MinLength(2, { message: 'O título deve ter no mínimo 2 caracteres.' })
  @MaxLength(100, { message: 'O título deve ter no máximo 100 caracteres.' })
  title?: string;

  @IsOptional()
  @IsString({ message: 'A descrição deve ser uma string.' })
  @MinLength(10, { message: 'A descrição deve ter no mínimo 10 caracteres.' })
  @MaxLength(500, { message: 'A descrição deve ter no máximo 500 caracteres.' })
  description?: string;

  @IsOptional()
  @IsInt({ message: 'O ano deve ser um número inteiro.' })
  @Min(1000, { message: 'Ano inválido. Use um valor maior que 1000.' })
  @Max(new Date().getFullYear(), { message: 'O ano não pode ser no futuro.' })
  year?: number;

  @IsOptional()
  @IsString({ message: 'O autor deve ser uma string.' })
  author?: string;
}
