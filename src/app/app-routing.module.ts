import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from '../app/people-list/people-list.component'
import { PeopleInfComponent } from '../app/people-inf/people-inf.component'
import { FilmListComponent } from './film-list/film-list.component'

const routes: Routes = [
  {path: '', redirectTo: '/people-list', pathMatch: 'full'},
  {path: 'people-list', component: PeopleListComponent},
  {path: 'people-inf/:id', component: PeopleInfComponent},
  {path: 'film-inf/:id', component: FilmListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
