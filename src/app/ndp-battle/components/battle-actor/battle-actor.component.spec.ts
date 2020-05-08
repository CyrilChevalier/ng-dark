import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleActorComponent } from './battle-actor.component';

describe('BattleActorComponent', () => {
  let component: BattleActorComponent;
  let fixture: ComponentFixture<BattleActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
