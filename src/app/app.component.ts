import { Component } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games: Array<Game> = [
    {
      name: 'test2',
      graphics: 1,
      id: 2,
      interest: 1,
      playability: 1,
    },
    {
      name: 'test',
      graphics: 1,
      id: 2,
      interest: 1,
      playability: 1,
    }];

}
