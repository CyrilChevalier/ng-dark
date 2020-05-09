import { Component, OnInit } from '@angular/core';

import { NdpBattleActor } from '../../models/actor.model';
import { NdpBattleModule } from '../../ndp-battle.module';
import { RealtimeUpdaterService } from 'src/app/shared/services/realtime-updater.service';

const HEROS: NdpBattleActor = {
  nom: 'Héros',
  pdv: 20,
  actions: [
    {
      nom: 'Coup d\'épée',
      condition: () => true
    },
    {
      nom: 'Bouclier',
      condition: () => true
    },
    {
      nom: 'Attendre',
      condition: () => true
    }
  ]
}

const ENNEMI: NdpBattleActor = {
  nom: 'Ennemi',
  pdv: 15,
  actions: [
    {
      nom: 'Coup d\'épée',
      condition: () => true
    },
    {
      nom: 'Bouclier',
      condition: () => true
    },
    {
      nom: 'Attendre',
      condition: () => true
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

  constructor(private _realtimeUpdaterService: RealtimeUpdaterService) { }

  ngOnInit(): void {

    this._heros.cible = this._ennemi;
    this._ennemi.cible = this._heros;
    this._heros.endurance = this._realtimeUpdaterService.createAutoResetNumber(100,0.05,500);
    this._ennemi.endurance = this._realtimeUpdaterService.createAutoResetNumber(100,0.05,500);
    this._heros.actions[0].agit = () => this._attaqueCible(this._heros);
    this._heros.actions[0].condition = () => this._heros.endurance.currentValue >= 25;
    this._ennemi.actions[0].agit = () => this._attaqueCible(this._ennemi);
    this._ennemi.actions[0].condition = () => this._ennemi.endurance.currentValue >= 25;
  }

  public get heros(): NdpBattleActor {
    return this._heros;
  }

  public get ennemi(): NdpBattleActor {
    return this._ennemi;
  }

  private _attaqueCible(acteur: NdpBattleActor): void {
    acteur.cible.pdv -= 1;
    acteur.endurance.currentValue -= 25;
    //setTimeout(() => this._resetEndurance(acteur),500);
  }

  private _resetEndurance(acteur: NdpBattleActor): void {
    /*if (acteur.endurance < 100) {
      acteur.endurance += 0.2;
      if (acteur.endurance > 100) {
        acteur.endurance = 100;
      }
      setTimeout(() => this._resetEndurance(acteur),5);
    }*/
  }

}
