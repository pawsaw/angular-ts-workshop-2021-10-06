import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _bookApi: BookApiService, private _router: Router) {}

  ngOnInit(): void {
    const _sub = this._bookApi.fetchAllBooks().subscribe((books) => {
      this.books = books;
    });

    this.sub.add(_sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  navigateToBook(book: Book): void {
    this._router.navigate(['/books', book.isbn]);
  }

  filterQuery = '';

  bookFilterChanged({ value }: BookFilterChangedEvent): void {
    this.filterQuery = value;
  }
}
