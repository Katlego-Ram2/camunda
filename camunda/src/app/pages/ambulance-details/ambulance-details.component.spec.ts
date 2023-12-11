import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceDetailsComponent } from './ambulance-details.component';

describe('AmbulanceDetailsComponent', () => {
  let component: AmbulanceDetailsComponent;
  let fixture: ComponentFixture<AmbulanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbulanceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbulanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
