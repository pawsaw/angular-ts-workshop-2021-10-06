export type ISBN = string;

export interface Book {
  isbn: ISBN;
  title: string;
  author: string;
  abstract: string;
}
