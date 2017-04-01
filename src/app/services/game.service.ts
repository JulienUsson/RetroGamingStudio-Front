import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pagination } from '../models/pagination';
import { Game } from '../models/game';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  getGames(page: number): Promise<Pagination<Game>> {
    return this.http
      .get('http://localhost:8080/games?page=' + page)
      .toPromise()
      .then(response => response.json() as Pagination<Game>)
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

  addPlayabilityScore(gameId, score): Promise<void> {
    return this.http
      .post('http://localhost:8080/games/' + gameId + "/playabilityScores", {"score": score})
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }

  addGraphicsScore(gameId, score): Promise<void> {
    return this.http
      .post('http://localhost:8080/games/' + gameId + "/graphicsScores", {"score": score})
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }

  addInterestScore(gameId, score): Promise<void> {
    return this.http
      .post('http://localhost:8080/games/' + gameId + "/interestScores", {"score": score})
      .toPromise()
      .then(response => response.text())
      .catch(error => {
        console.error(error);
      });
  }
}