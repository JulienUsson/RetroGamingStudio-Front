import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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
  page: number = 1;
  isLoading: boolean;
  searchInput: string = null;

  constructor(private gameService: GameService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if ('page' in params) {
        this.page = +params['page'];
      }

      this.getGames();
    });
  }

  private getGames() {
    this.isLoading = true;
    this.gameService.getGames(this.page, this.searchInput).then(games => {
      this.games = games;
      this.isLoading = false;

      // if no games in page -> change to page 1
      if (this.page != 1 && this.games.numberOfElements == 0) {
        this.page = 1;
        this.location.go("/games/" + 1);
        this.getGames();
      }
    });
  }

  changePage(page: number) {
    this.page = page;
    this.location.go("/games/" + this.page);
    this.getGames();
  }

}
