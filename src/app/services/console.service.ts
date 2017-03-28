import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Console } from '../models/console';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  getGames(): Promise<Console[]> {
    return this.http
      .get('http://localhost:8080/consoles')
      .toPromise()
      .then(response => response.json() as Console[])
      .catch(error => {
        console.error(error);
      });
  }
}
