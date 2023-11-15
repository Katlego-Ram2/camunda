import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IAMComponent } from './iam.component';

describe('IAMComponent', () => {
  let component: IAMComponent;
  let fixture: ComponentFixture<IAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IAMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
