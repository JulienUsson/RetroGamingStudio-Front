import { Component, OnInit } from '@angular/core';

import { Pagination } from '../models/pagination';
import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {
  games: Pagination<Game>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().then(games => {
      this.games = games;
    });
  }

}
