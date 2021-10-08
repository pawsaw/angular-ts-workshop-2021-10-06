import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../book-api.service';
import { Book, ISBN } from '../domain/book';
import { switchMap } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';

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
export class BookDetailComponent implements OnInit {
  book$: Observable<Book | null> = of(null);

  constructor(
    private _route: ActivatedRoute,
    private _bookApi: BookApiService
  ) {}

  ngOnInit(): void {
    this.book$ = this._route.params.pipe(
      switchMap((params) => this._bookApi.findBookByIsbn(params.isbn))
    );
  }
}
