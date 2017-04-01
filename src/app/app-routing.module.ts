import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { ConsolesComponent } from './consoles/consoles.component';

const routes: Routes = [
    { path: '', redirectTo: '/games/1', pathMatch: 'full' },
    { path: 'games/:page', component: GamesComponent },
    { path: 'games', redirectTo: '/games/1'},
    { path: 'consoles', component: ConsolesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }