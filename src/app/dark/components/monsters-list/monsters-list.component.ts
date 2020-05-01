import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/characters.model';
import { MonstersService } from '../../services/monsters.service';

@Component({
  selector: 'app-monsters-list',
  templateUrl: './monsters-list.component.html',
  styleUrls: ['./monsters-list.component.scss']
})
export class MonstersListComponent implements OnInit {

  private _monsters: Character[];

  constructor(private _monstersService: MonstersService) { }

  ngOnInit(): void {
    this._monstersService.getAll().subscribe(result => this._monsters = result);
  }

  public get monsters(): Character[] {
    return this._monsters;
  }

}
