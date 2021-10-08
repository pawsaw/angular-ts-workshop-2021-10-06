import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface NavigationTriggered {
  to: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() navigationTriggered = new EventEmitter<NavigationTriggered>();

  constructor() {}

  ngOnInit(): void {}

  navigationLinkClicked(event: MouseEvent, to: string): void {
    event.preventDefault();
    this.navigationTriggered.emit({ to });
  }
}
