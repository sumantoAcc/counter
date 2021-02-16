import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'counter2';
  counter: number = 0;
  lastClicked: Array<any> = [];

  constructor() {
  }

  incrementCount(): void {
    this.counter = this.counter + 1;
    this.lastClicked.push({ clickedAt: new Date(), count: this.counter});
  }
}
