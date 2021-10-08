import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../book-api.service';
import { Book, ISBN } from '../domain/book';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

/**
 * 1. Hole die isbn
 * 2. Hole das buch über die isbn
 * 3. Weise das buch einem property hinzu
 */

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
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
}
