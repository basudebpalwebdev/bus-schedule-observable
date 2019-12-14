import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusScheduleChartComponent } from './bus-schedule-chart.component';

describe('BusScheduleChartComponent', () => {
  let component: BusScheduleChartComponent;
  let fixture: ComponentFixture<BusScheduleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusScheduleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusScheduleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
