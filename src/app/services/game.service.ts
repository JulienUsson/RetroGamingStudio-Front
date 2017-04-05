import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pagination } from '../models/pagination';
import { Game } from '../models/game';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

  url : String = "http://localhost:8080";

  constructor(private http: Http) { }

  getGames(page: number): Promise<Pagination<Game>> {
    return this.http
      .get(this.url + '/games?page=' + page)
      .toPromise()
      .then(response => response.json() as Pagination<Game>)
      .catch(error => {
        console.error(error);
      });
  }

  getSearchedGames(page: number, searchedValue: string): Promise<Pagination<Game>> {
    return this.http
      .get(this.url + '/games?page=' + page + "&search=" + searchedValue)
      .toPromise()
      .then(response => response.json() as Pagination<Game>)
      .catch(error => {
        console.error(error);
      });
  }

  getGameImage(gameId): Promise<string> {
    return this.http
      .get(this.url + '/images/' + gameId)
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }

  addPlayabilityScore(gameId, score): Promise<string> {
    return this.http
      .post(this.url + '/games/' + gameId + "/playabilityScores", {"score": score})
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }

  addGraphicsScore(gameId, score): Promise<string> {
    return this.http
      .post(this.url + '/games/' + gameId + "/graphicsScores", {"score": score})
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }

  addInterestScore(gameId, score): Promise<string> {
    return this.http
      .post(this.url + '/games/' + gameId + "/interestScores", {"score": score})
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }
}
