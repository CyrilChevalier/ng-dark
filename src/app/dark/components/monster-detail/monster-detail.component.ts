import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../models/characters.model';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.scss']
})
export class MonsterDetailComponent implements OnInit {

  @Input() monster: Character;

  constructor() { }

  ngOnInit(): void {
  }


}
