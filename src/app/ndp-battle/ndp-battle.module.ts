import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BattleActorComponent } from './components/battle-actor/battle-actor.component';
import { BattleLayoutComponent } from './components/battle-layout/battle-layout.component';

@NgModule({
  declarations: [BattleLayoutComponent, BattleActorComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NdpBattleModule { }
