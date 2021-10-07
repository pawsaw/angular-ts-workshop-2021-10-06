import { Component, OnInit } from '@angular/core';
import { BookApiService } from './book-api.service';
import { BookFilterChangedEvent } from './book-filter-input/book-filter-input.component';
import { Book } from './domain/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private bookApi: BookApiService) {}

  ngOnInit(): void {
    this.books = this.bookApi.fetchAllBooks();
  }

  books: Book[] = [];

  navigateToBook(book: Book): void {
    console.log('navigateToBook', book);
  }

  filterQuery = '';

  bookFilterChanged({ value }: BookFilterChangedEvent): void {
    this.filterQuery = value;
  }
}
