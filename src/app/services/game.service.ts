import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import Config from '../config';

import { Game } from '../models/game';
import { Pagination } from '../models/pagination';

@Injectable()
export class GameService {
  constructor(private http: Http) { }

  getGames(page: number, searchedValue: string = null): Promise<Pagination<Game>> {
    let url = Config.urlApi + '/games?page=' + page;
    if (searchedValue !== null) {
      url += "&search=" + searchedValue;
    }
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Pagination<Game>)
      .catch(error => {
        console.error(error);
      });
  }

  getGameImage(gameId): Promise<string> {
    return this.http
      .get(Config.urlApi + '/images/' + gameId)
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }

  addPlayabilityScore(gameId, score): Promise<string> {
    return this.http
      .post(Config.urlApi + '/games/' + gameId + "/playabilityScores", { "score": score })
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }

  addGraphicsScore(gameId, score): Promise<string> {
    return this.http
      .post(Config.urlApi + '/games/' + gameId + "/graphicsScores", { "score": score })
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }

  addInterestScore(gameId, score): Promise<string> {
    return this.http
      .post(Config.urlApi + '/games/' + gameId + "/interestScores", { "score": score })
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }
}
