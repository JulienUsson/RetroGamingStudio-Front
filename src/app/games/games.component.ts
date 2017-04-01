import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

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
  isLoading: boolean;

  constructor(private gameService: GameService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.isLoading = true;

    this.route.params.subscribe(params => {
      this.getGames(+params['page']);
    });
  }

  private getGames(page: number) {
    this.isLoading = true;
    this.gameService.getGames(page).then(games => {
        this.games = games;
        this.isLoading = false;
      });
  }

  changePage(page: number) {
    this.location.go("/games/" + page);
    this.getGames(page);
  }

}
