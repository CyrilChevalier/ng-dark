import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BattleLayoutComponent } from './ndp-battle/components/battle-layout/battle-layout.component';

const routes: Routes = [
  { path: 'battle', component: BattleLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
