import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFilterInputComponent } from './book-filter-input/book-filter-input.component';
import { BookFilterPipe } from './book-filter/book-filter.pipe';
import { BookApiService } from './book-api.service';
import { environment } from '../../environments/environment.prod';
import { LocalBookApiService } from './local-book-api.service';

const defaultBookApiService = new BookApiService();

function createBookApiService(): BookApiService {
  if (environment.local) {
    return new LocalBookApiService();
  }

  return defaultBookApiService;
}

@NgModule({
  declarations: [
    BookComponent,
    BookCardComponent,
    BookFilterInputComponent,
    BookFilterPipe,
  ],
  providers: [
    {
      useFactory: createBookApiService,
      provide: BookApiService,
    },
  ],
  imports: [CommonModule],
  exports: [BookComponent],
})
export class BookModule {}
