import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchBarService {

  constructor() { }

  public searchBarEvent = new Subject<string>();

  public search(searchInput: string) {
    this.searchBarEvent.next("test");
  }
}
