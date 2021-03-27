import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number;
  words: string;

  constructor() {
    this.count = 0;
  }

  resetCounter = () => {
    this.count = 0;
  }

  increaseCounter = () => {
    this.count += 1;
  }

  decreaseCounter = () => {
    if (this.count)
      this.count -= 1;
  }

}
