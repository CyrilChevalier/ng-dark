import { Injectable } from '@angular/core';
import { Character } from '../models/characters.model';
import { Observable, of } from 'rxjs';

const MONSTERS: Character[] = [
  {
    name: "Mygale des marais",
    lifepoint: 34,
    attacks: [
      {
        name: "Morsure",
        cooldown: 1000,
        startDuration: 500,
        attack: 8
      }
    ]
  },
  {
    name: "Rat géant",
    lifepoint: 28,
    attacks: [
      {
        name: "Coup de griffes",
        cooldown: 500,
        startDuration: 120,
        attack: 2
      }
    ]
  }
]


@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  constructor() { }

  public getAll(): Observable<Character[]> {
    return of(MONSTERS);
  }
}
