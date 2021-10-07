import { Component } from '@angular/core';
import { Book } from './domain/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookm';

  book: Book = {
    isbn: '123',
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...',
  };

  navigateToBook(book: Book): void {
    console.log('navigateToBook', book);
  }

  constructor() {}
}
