import { Component, OnInit, Input } from '@angular/core';
import { DpAction } from '../../models/actions.model';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() action: DpAction;

  constructor() { }

  ngOnInit(): void {
    if (!this.action) {
      this.action = {
        label: 'Test action'
      };
    }
  }

}
