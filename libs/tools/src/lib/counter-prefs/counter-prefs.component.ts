import { Component } from '@angular/core';

@Component({
  selector: 'adt-counter-prefs',
  templateUrl: './counter-prefs.component.html',
  styleUrls: ['./counter-prefs.component.css'],
})
export class CounterPrefsComponent {
  by = 1;

  changeCountBy(by: number) {
    this.by = by;
  }
}
