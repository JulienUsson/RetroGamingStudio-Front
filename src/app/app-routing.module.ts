import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'games', component: GamesComponent},
    { path: 'games/:page', component: GamesComponent },
    { path: 'games/search/:searchedValue', component: GamesComponent },
    { path: 'games/search/:searchedValue/:page', component: GamesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }