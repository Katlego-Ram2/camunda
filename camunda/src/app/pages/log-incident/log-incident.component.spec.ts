import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogIncidentComponent } from './log-incident.component';

describe('LogIncidentComponent', () => {
  let component: LogIncidentComponent;
  let fixture: ComponentFixture<LogIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
