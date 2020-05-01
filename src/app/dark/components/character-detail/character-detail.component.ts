import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/characters.model';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  private _character: Character;

  constructor(private _charactersService: CharactersService) { }

  ngOnInit(): void {
    this._charactersService.getMainCharacter().subscribe(result => this._character = result);
  }

  public get character(): Character {
    return this._character;
  }
}
