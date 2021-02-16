import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

  @Output('counterClick') onclick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.onclick.emit();
  }

}
