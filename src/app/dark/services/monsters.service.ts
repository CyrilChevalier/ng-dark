import { Injectable } from '@angular/core';
import { Character } from '../models/characters.model';
import { Observable, of } from 'rxjs';

const MONSTERS: Character[] = [
  { name: "Araignée géante", lifepoint: 10, attack: 2 },
  { name: "Rat géant", lifepoint: 12, attack: 1}
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
