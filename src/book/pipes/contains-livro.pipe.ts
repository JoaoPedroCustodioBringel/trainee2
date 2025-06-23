import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ContainslivroPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value.title === 'string' && !value.title.toLowerCase().includes('livro')) {
      throw new BadRequestException('O título deve conter a palavra "livro".');
    }
    return value;
  }
}




