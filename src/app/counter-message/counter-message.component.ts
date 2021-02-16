import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-counter-message]',
  templateUrl: './counter-message.component.html',
  styleUrls: ['./counter-message.component.scss']
})
export class CounterMessageComponent implements OnInit {

  @Input('counterClicked') clickedCount: any;

  constructor() { }

  ngOnInit(): void {
  }

}
