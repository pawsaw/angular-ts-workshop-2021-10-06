import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookApiService } from './book-api.service';
import { BookFilterChangedEvent } from './book-filter-input/book-filter-input.component';
import { Book } from './domain/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  private readonly sub = new Subscription();

  constructor(private bookApi: BookApiService) {}

  ngOnInit(): void {
    const _sub = this.bookApi.fetchAllBooks().subscribe((books) => {
      this.books = books;
    });

    this.sub.add(_sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  navigateToBook(book: Book): void {
    console.log('navigateToBook', book);
  }

  filterQuery = '';

  bookFilterChanged({ value }: BookFilterChangedEvent): void {
    this.filterQuery = value;
  }
}
