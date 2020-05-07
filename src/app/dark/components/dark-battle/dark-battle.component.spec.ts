import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBattleComponent } from './dark-battle.component';

describe('DarkBattleComponent', () => {
  let component: DarkBattleComponent;
  let fixture: ComponentFixture<DarkBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
