import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {
  games: Array<Game>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
        this.gameService.getGames().then(games => {
      this.games = games;
    });
  }

}
