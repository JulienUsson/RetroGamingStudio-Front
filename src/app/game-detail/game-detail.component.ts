import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
  providers: [GameService]
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;
  @Input() image: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGameImage(this.game.id).then(image => {
      this.image = "data:image/jpeg;base64," + image;
    });
  }

  addPlayabilityScore(score: number) {
    this.gameService.addPlayabilityScore(this.game.id, score);
  }

  addGraphicsScore(score: number) {
    console.log(score);
  }

  addInterestScore(score: number) {
    console.log(score);
  }

}
