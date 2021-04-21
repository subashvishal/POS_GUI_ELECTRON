import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalDataComponent } from './cal-data.component';

describe('CalDataComponent', () => {
  let component: CalDataComponent;
  let fixture: ComponentFixture<CalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
