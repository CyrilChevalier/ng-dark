import { Injectable } from '@angular/core';
import { Character } from '../models/characters.model';
import { Observable, of } from 'rxjs';

const MAIN_CHARACTER: Character = {

    name: 'Hero',
    lifepoint: 15,
    attacks: [
      {
        cooldown: 500,
        startDuration: 150,
        name: 'Epée',
        attack: 5
      }
    ]

}

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  public getMainCharacter(): Observable<Character> {
    return of(MAIN_CHARACTER);
  }
}
