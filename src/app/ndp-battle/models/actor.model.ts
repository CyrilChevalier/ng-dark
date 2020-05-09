import { NdpAutoResetNumber } from 'src/app/shared/models/realtime-numbers.model';

export interface NdpBattleAction {
  nom?: string;
  agit?: () => void;
  condition?:() => boolean;
}

export interface NdpBattleActor {
  nom?: string;
  pdv?: number;
  endurance?: NdpAutoResetNumber;
  cible?: NdpBattleActor;
  actions?: NdpBattleAction[];
}
