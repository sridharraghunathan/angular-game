import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent   {
  @Input('text') text: string = '';
  @Input() position: number = 0;
  @Output() selectedPosition: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  playHandler() {
    this.selectedPosition.emit(this.position);
  }
}
