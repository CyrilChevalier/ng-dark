import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonstersListComponent } from './dark/components/monsters-list/monsters-list.component';
import { CharacterDetailComponent } from './dark/components/character-detail/character-detail.component';


const routes: Routes = [
  { path: 'monsters', component: MonstersListComponent},
  { path: 'main-character', component: CharacterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
