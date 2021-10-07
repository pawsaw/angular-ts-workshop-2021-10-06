import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface BookFilterChangedEvent {
  value: string;
}

@Component({
  selector: 'app-book-filter-input',
  templateUrl: './book-filter-input.component.html',
  styleUrls: ['./book-filter-input.component.scss'],
})
export class BookFilterInputComponent {
  @Input() label = 'Filter:';

  @Output() bookFilterChanged = new EventEmitter<BookFilterChangedEvent>();

  filterChanged(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.bookFilterChanged.emit({ value });
  }
}
