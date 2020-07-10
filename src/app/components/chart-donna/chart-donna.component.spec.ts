import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDonnaComponent } from './chart-donna.component';

describe('ChartDonnaComponent', () => {
  let component: ChartDonnaComponent;
  let fixture: ComponentFixture<ChartDonnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDonnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDonnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
