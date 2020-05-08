import { Component, Input, OnInit } from '@angular/core';

import { NdpBattleActor } from '../../models/actor.model';

@Component({
  selector: 'ndp-battle-actor',
  templateUrl: './battle-actor.component.html',
  styleUrls: ['./battle-actor.component.scss']
})
export class BattleActorComponent implements OnInit {

  @Input() acteur: NdpBattleActor;

  constructor() { }

  ngOnInit(): void {

  }

}
