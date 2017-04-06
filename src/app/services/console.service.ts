import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Console } from '../models/console';
import Config from '../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConsoleService {

  constructor(private http: Http) { }

  getConsoles(): Promise<Console[]> {
    return this.http
      .get(Config.urlApi + '/consoles')
      .toPromise()
      .then(response => response.json() as Console[])
      .catch(error => {
        console.error(error);
      });
  }
}
