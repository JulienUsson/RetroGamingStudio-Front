import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
