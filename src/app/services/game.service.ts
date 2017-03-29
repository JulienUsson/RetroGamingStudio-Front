import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Game } from '../models/game';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  getGames(): Promise<Game[]> {
    return this.http
      .get('http://localhost:8080/games')
      .toPromise()
      .then(response => response.json() as Game[])
      .catch(error => {
        console.error(error);
      });
  }

  getGameImage(gameId): Promise<string> {
    return this.http
      .get('http://localhost:8080/images/' + gameId)
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }
}
