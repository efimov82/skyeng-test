import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtWordsLearnComponent } from './vt-words-learn.component';

describe('VtWordsLearnComponent', () => {
  let component: VtWordsLearnComponent;
  let fixture: ComponentFixture<VtWordsLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtWordsLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtWordsLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
