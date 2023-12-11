import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComplaintComponent } from './client-complaint.component';

describe('ClientComplaintComponent', () => {
  let component: ClientComplaintComponent;
  let fixture: ComponentFixture<ClientComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientComplaintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
