import { Component, Input, OnInit } from '@angular/core';
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

  @Input() content: BookView = {
    title: '',
    abstract: '',
    author: '',
  };

  constructor() {}

  bookDetailClicked(event: MouseEvent): void {
    event.preventDefault();

    console.log('book detail clicked', event);
  }

  ngOnInit(): void {}
}
