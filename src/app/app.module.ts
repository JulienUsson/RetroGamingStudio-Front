import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameListComponent } from './game-list/game-list.component';
import { GamesComponent } from './games/games.component';
import { MenuComponent } from './menu/menu.component';
import { ScoreComponent } from './score/score.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchedGamesPipe } from './searched-games.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameDetailComponent,
    GameListComponent,
    GamesComponent,
    MenuComponent,
    ScoreComponent,
    PaginationComponent,
    SearchedGamesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
