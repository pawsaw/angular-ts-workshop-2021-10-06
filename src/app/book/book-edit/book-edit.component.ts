import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookApiService } from '../book-api.service';
import { Book } from '../domain/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: Book | null = null;

  private readonly sub = new Subscription();

  constructor(
    private _route: ActivatedRoute,
    private _bookApi: BookApiService
  ) {}

  ngOnInit(): void {
    const _sub = this._route.params
      .pipe(switchMap(({ isbn }) => this._bookApi.findBookByIsbn(isbn)))
      .subscribe((book) => {
        this.book = book;
      });
    this.sub.add(_sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save(): void {
    console.log('saving book', this.book);
  }
}
