import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessInstancesComponent } from './process-instances.component';

describe('ProcessInstancesComponent', () => {
  let component: ProcessInstancesComponent;
  let fixture: ComponentFixture<ProcessInstancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessInstancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
