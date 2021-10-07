import { Component, OnInit } from '@angular/core';
import { BookFilterChangedEvent } from './book-filter-input/book-filter-input.component';
import { Book } from './domain/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];

  navigateToBook(book: Book): void {
    console.log('navigateToBook', book);
  }

  filterQuery = '';

  bookFilterChanged({ value }: BookFilterChangedEvent): void {
    this.filterQuery = value;
  }
}
