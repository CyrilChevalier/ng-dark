import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleLayoutComponent } from './components/battle-layout/battle-layout.component';
import { BattleActorComponent } from './components/battle-actor/battle-actor.component';



@NgModule({
  declarations: [BattleLayoutComponent, BattleActorComponent],
  imports: [
    CommonModule
  ]
})
export class NdpBattleModule { }
