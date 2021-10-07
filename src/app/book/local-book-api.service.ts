import { BookApiService } from './book-api.service';
import { Book } from './domain/book';

export class LocalBookApiService implements BookApiService {
  fetchAllBooks(): Book[] {
    return [];
  }
}
