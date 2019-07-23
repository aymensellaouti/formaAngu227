import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nf400Component } from './nf400.component';

describe('Nf400Component', () => {
  let component: Nf400Component;
  let fixture: ComponentFixture<Nf400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nf400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nf400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
