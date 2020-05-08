export interface NdpBattleAction {
  nom?: string;
  agit?: () => void;
}

export interface NdpBattleActor {
  nom?: string;
  pdv?: number;
  endurance?: number;
  cible?: NdpBattleActor;
  actions?: NdpBattleAction[];
}
