import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationTriggered } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bookm';

  constructor(private _router: Router) {}

  navigate({ to }: NavigationTriggered): void {
    this._router.navigate([to]);
  }
}
