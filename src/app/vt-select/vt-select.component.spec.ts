import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtSelectComponent } from './vt-select.component';

describe('VtSelectComponent', () => {
  let component: VtSelectComponent;
  let fixture: ComponentFixture<VtSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
