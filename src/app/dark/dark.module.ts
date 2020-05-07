import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersListComponent } from './components/monsters-list/monsters-list.component';
import { MonsterDetailComponent } from './components/monster-detail/monster-detail.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { DarkBattleComponent } from './components/dark-battle/dark-battle.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MonstersListComponent, MonsterDetailComponent, CharacterDetailComponent, DarkBattleComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MonstersListComponent
  ]
})
export class DarkModule { }
