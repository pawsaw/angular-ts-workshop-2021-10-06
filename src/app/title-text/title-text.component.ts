import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

type TitleTextType = 'warning' | 'info';

@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss'],
})
export class TitleTextComponent implements OnInit, OnChanges {
  @Input() text = '';
  @Input() type: TitleTextType = 'info';

  color: 'blue' | 'red' = 'blue';

  // get color(): 'blue' | 'red' {
  //   return this.type === 'info' ? 'blue' : 'red';
  // }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      const change = changes.type;
      this.color = change.currentValue === 'info' ? 'blue' : 'red';
    }
  }

  ngOnInit(): void {}
}
