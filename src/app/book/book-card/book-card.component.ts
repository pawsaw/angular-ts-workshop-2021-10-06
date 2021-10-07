import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../domain/book';

export type BookView = {
  title: Book['title'];
  abstract: Book['abstract'];
  author: Book['author'];
};

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  isTitle = false;

  abstractStyle = {
    color: 'green',
  };

  @Output() bookClicked = new EventEmitter<Book>();

  private _book: Book | undefined;

  @Input() set book(value: Book | undefined) {
    this._book = value;
    if (value) {
      this.content = {
        ...value,
      };
    }
  }

  get book(): Book | undefined {
    return this._book;
  }

  content: BookView = {
    title: '',
    abstract: '',
    author: '',
  };

  constructor() {}

  bookDetailClicked(event: MouseEvent): void {
    event.preventDefault();
    if (this._book) {
      this.bookClicked.emit(this.book);
    }

    console.log('book detail clicked', event);
  }

  ngOnInit(): void {}
}
