import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './models/game';

@Pipe({
  name: 'searchedGames'
})
export class SearchedGamesPipe implements PipeTransform {

  // method applied when using "|searchedGames"
  transform(allGames: Array<Game>, searchStr?: String) {

    return allGames.filter((game) => {
        if(searchStr) {
          let regExp = new RegExp('.*'+searchStr+'.*', 'i');
          // TODO gérer les gameFranchises
          /*for(let gameFranchise of game.gameFranchise) {
            if(regExp.test(gameFranchise.name)) {
              return true;
            }
          }*/
          return regExp.test(game.name);
        } else {
          // no research so display all items
          return true;
        }
      }
    );

  }

}
