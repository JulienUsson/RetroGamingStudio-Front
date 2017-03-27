import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})
export class AppComponent implements OnInit {
  games: Array<Game>;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().then(games => {
      this.games = games;
      console.log(games);
    });
  }
}
