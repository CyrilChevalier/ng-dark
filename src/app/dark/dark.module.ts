import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersListComponent } from './components/monsters-list/monsters-list.component';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';



@NgModule({
  declarations: [MonstersListComponent, MonsterDetailComponent, CharacterDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MonstersListComponent
  ]
})
export class DarkModule { }
