import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../domain/book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], query: string): Book[] {
    if (query.trim().length < 1) {
      return books;
    }

    return books.filter((b) =>
      b.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
