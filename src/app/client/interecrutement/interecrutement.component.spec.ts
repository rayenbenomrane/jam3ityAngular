import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterecrutementComponent } from './interecrutement.component';

describe('InterecrutementComponent', () => {
  let component: InterecrutementComponent;
  let fixture: ComponentFixture<InterecrutementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterecrutementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
