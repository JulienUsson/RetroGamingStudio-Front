import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Output() onScoreSelected: EventEmitter<number> = new EventEmitter<number>();
  @Input() value: number;
  selectedValue: number;

  constructor() { }

  ngOnInit() {
    this.selectedValue = this.value;
  }

  onClick(i: number) {
    this.onScoreSelected.emit(i+1);
  }

}
