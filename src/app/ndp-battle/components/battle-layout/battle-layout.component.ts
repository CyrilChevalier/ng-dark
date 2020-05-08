import { Component, OnInit } from '@angular/core';

import { NdpBattleActor } from '../../models/actor.model';
import { NdpBattleModule } from '../../ndp-battle.module';

const HEROS: NdpBattleActor = {
  nom: 'Héros',
  pdv: 20,
  endurance: 10,
  actions: [
    {
      nom: 'Coup d\'épée'
    },
    {
      nom: 'Bouclier'
    },
    {
      nom: 'Attendre'
    }
  ]
}

const ENNEMI: NdpBattleActor = {
  nom: 'Ennemi',
  pdv: 15,
  endurance: 18,
  actions: [
    {
      nom: 'Coup d\'épée'
    },
    {
      nom: 'Bouclier'
    },
    {
      nom: 'Attendre'
    }
  ]
}

@Component({
  selector: 'ndp-battle-layout',
  templateUrl: './battle-layout.component.html',
  styleUrls: ['./battle-layout.component.scss']
})
export class BattleLayoutComponent implements OnInit {

  private _heros: NdpBattleActor = HEROS;
  private _ennemi: NdpBattleActor = ENNEMI;

  constructor() { }

  ngOnInit(): void {
    this._heros.cible = this._ennemi;
    this._ennemi.cible = this._heros;
    this._heros.actions[0].agit = () => this._attaqueCible(this._heros);
    this._ennemi.actions[0].agit = () => this._attaqueCible(this._ennemi);
  }

  public get heros(): NdpBattleActor {
    return this._heros;
  }

  public get ennemi(): NdpBattleActor {
    return this._ennemi;
  }

  private _attaqueCible(acteur: NdpBattleActor): void {
    acteur.cible.pdv -= 5;
  }

}
