import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtScoreComponent } from './vt-score.component';

describe('VtScoreComponent', () => {
  let component: VtScoreComponent;
  let fixture: ComponentFixture<VtScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
