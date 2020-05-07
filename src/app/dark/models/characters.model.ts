

export interface DarkAction {
  name: string;

}

export interface DarkBattleAction extends DarkAction {
  cooldown: number;
  startDuration: number;
  attack: number;
}

export interface Character {
  name: string;
  lifepoint: number;
  attacks: DarkBattleAction[];
}
