import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Console } from '../models/console';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConsoleService {

  constructor(private http: Http) { }

  getConsoles(): Promise<Console[]> {
    return this.http
      .get('http://localhost:8080/consoles')
      .toPromise()
      .then(response => response.json() as Console[])
      .catch(error => {
        console.error(error);
      });
  }
}
