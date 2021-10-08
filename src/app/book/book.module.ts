import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterInputComponent } from './book-filter-input/book-filter-input.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterInputComponent,
    BookFilterPipe,
    BookDetailComponent,
  ],
  providers: [],
  imports: [CommonModule, HttpClientModule],
  exports: [BookComponent, BookDetailComponent],
})
export class BookModule {}
