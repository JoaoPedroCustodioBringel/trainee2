import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookMapper } from './mapper/book.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService, BookMapper],
  controllers: [BookController],
})
export class BookModule { }




