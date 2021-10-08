import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './domain/book';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private _http: HttpClient) {}

  fetchAllBooks(): Observable<Book[]> {
    return this._http.get<Book[]>('http://localhost:4730/books');
  }
}
