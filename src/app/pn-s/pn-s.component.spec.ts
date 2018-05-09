import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnSComponent } from './pn-s.component';

describe('PnSComponent', () => {
  let component: PnSComponent;
  let fixture: ComponentFixture<PnSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
