import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
    { path: '', redirectTo: '/games/1', pathMatch: 'full' },
    { path: 'games/:page', component: GamesComponent },
    { path: 'games', redirectTo: '/games/1'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }