import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Output() onScoreSelected: EventEmitter<number> = new EventEmitter<number>();
  @Input() value: number;
  readOnly: boolean;
  selectedValue: number;

  constructor() { }

  ngOnInit() {
    this.selectedValue = this.value;
  }

  onClick(i: number) {
    this.readOnly = true;
    this.onScoreSelected.emit(i + 1);
  }

  onMouseLeave() {
    if (this.readOnly !== true) {
      this.selectedValue = this.value;
    }
  }

  onMouseEnter(i: number) {
    if (this.readOnly !== true) {
      this.selectedValue = i + 1;
    }
  }
}
