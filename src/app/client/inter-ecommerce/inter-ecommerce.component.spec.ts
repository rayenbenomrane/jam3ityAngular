import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterEcommerceComponent } from './inter-ecommerce.component';

describe('InterEcommerceComponent', () => {
  let component: InterEcommerceComponent;
  let fixture: ComponentFixture<InterEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
