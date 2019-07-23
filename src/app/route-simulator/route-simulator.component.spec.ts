import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSimulatorComponent } from './route-simulator.component';

describe('RouteSimulatorComponent', () => {
  let component: RouteSimulatorComponent;
  let fixture: ComponentFixture<RouteSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
