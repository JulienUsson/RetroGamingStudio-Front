import { Component, OnInit, Input } from '@angular/core';
import { MdSnackBar } from '@angular/material';
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

  constructor(private gameService: GameService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.gameService.getGameImage(this.game.id).then(image => {
      this.image = "data:image/jpeg;base64," + image;
    });
  }

  addPlayabilityScore(score: number) {
    this.gameService.addPlayabilityScore(this.game.id, score).then(() => {
      this.snackBar.open("Votre vote a bien été pris en compte !", null, {
        duration: 1000,
      });
    });
  }

  addGraphicsScore(score: number) {
    this.gameService.addGraphicsScore(this.game.id, score).then(() => {
      this.snackBar.open("Votre vote a bien été pris en compte !", null, {
        duration: 1000,
      });
    });
  }

  addInterestScore(score: number) {
    this.gameService.addInterestScore(this.game.id, score).then(() => {
      this.snackBar.open("Votre vote a bien été pris en compte !", null, {
        duration: 1000,
      });
    });
  }

}
