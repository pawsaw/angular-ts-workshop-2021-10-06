import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookApiService } from './book-api.service';
import { BookFilterChangedEvent } from './book-filter-input/book-filter-input.component';
import { Book } from './domain/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books$: Observable<Book[]> = of([]);

  constructor(private _bookApi: BookApiService, private _router: Router) {}

  ngOnInit(): void {
    this.books$ = this._bookApi.fetchAllBooks();
  }

  navigateToBook(book: Book): void {
    this._router.navigate(['/books', book.isbn]);
  }

  filterQuery = '';

  bookFilterChanged({ value }: BookFilterChangedEvent): void {
    this.filterQuery = value;
  }
}
