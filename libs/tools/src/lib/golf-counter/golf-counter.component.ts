import { Component } from '@angular/core';

@Component({
  selector: 'adt-golf-counter',
  templateUrl: './golf-counter.component.html',
  styleUrls: ['./golf-counter.component.css'],
})
export class GolfCounterComponent {
  current = 0;
  increment() {
    this.current += 1;
  }

  decrement() {
    this.current -= 1;
  }
}
