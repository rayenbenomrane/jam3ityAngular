import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterDonationComponent } from './inter-donation.component';

describe('InterDonationComponent', () => {
  let component: InterDonationComponent;
  let fixture: ComponentFixture<InterDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
