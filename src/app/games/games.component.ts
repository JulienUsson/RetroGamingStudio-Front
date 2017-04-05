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
      // param page
      let page : number = 1;
      if("page" in params) {
        page = +params['page'];
      }

      // is there a searchedValue ?
      if("searchedValue" in params && params['searchedValue'] != "") {
        this.getSearchedGames(page, params['searchedValue']);
      } else {
        this.getGames(page);
      }
    });
  }

  private searchGames(search: string) {
    // get games
    this.getSearchedGames(1, search);
  }

  private getSearchUrl(search : string, page : number) : string {
    return "/games/search-" + search + "/" + page;
  }

  private getNormalUrl(page : number) : string {
    return "/games/" + page;
  }

  private getSearchedGames(page: number, searchedValue: string) {
    this.location.go(this.getSearchUrl(searchedValue, 1));
    this.isLoading = true;
    this.gameService.getSearchedGames(page, searchedValue).then(games => {
        this.games = games;
        this.isLoading = false;

        // if no games in page -> change to page 1
        if(page != 1 && this.games.numberOfElements == 0) {
          this.changePage(1);
        }
      });
  }

  private getGames(page: number) {
    this.location.go("/games/" + page);
    this.isLoading = true;
    this.gameService.getGames(page).then(games => {
        this.games = games;
        this.isLoading = false;

        // if no games in page -> change to page 1
        if(page != 1 && this.games.numberOfElements == 0) {
          this.changePage(1);
        }
      });
  }

  changePage(page: number) {
    this.route.params.subscribe(params => {
        // is there a searchedValue ?
        if("searchedValue" in params && params['searchedValue'] != "") {
          this.getSearchedGames(page, params['searchedValue']);
        } else {
          this.getGames(page);
        }
      });
  }

}
