import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestTravelOptionDisplayComponent } from './best-travel-option-display.component';

describe('BestTravelOptionDisplayComponent', () => {
  let component: BestTravelOptionDisplayComponent;
  let fixture: ComponentFixture<BestTravelOptionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestTravelOptionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestTravelOptionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
