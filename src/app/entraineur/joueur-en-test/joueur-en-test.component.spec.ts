import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurEnTestComponent } from './joueur-en-test.component';

describe('JoueurEnTestComponent', () => {
  let component: JoueurEnTestComponent;
  let fixture: ComponentFixture<JoueurEnTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoueurEnTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoueurEnTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
