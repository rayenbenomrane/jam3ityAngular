import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbonementComponent } from './abbonement.component';

describe('AbbonementComponent', () => {
  let component: AbbonementComponent;
  let fixture: ComponentFixture<AbbonementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbonementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbbonementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
