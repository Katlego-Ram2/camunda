import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAmbulanceDetailsComponent } from './change-ambulance-details.component';

describe('ChangeAmbulanceDetailsComponent', () => {
  let component: ChangeAmbulanceDetailsComponent;
  let fixture: ComponentFixture<ChangeAmbulanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAmbulanceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeAmbulanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
