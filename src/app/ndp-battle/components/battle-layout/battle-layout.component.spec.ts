import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleLayoutComponent } from './battle-layout.component';

describe('BattleLayoutComponent', () => {
  let component: BattleLayoutComponent;
  let fixture: ComponentFixture<BattleLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
