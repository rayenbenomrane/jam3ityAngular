import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurEnDemandeComponent } from './joueur-en-demande.component';

describe('JoueurEnDemandeComponent', () => {
  let component: JoueurEnDemandeComponent;
  let fixture: ComponentFixture<JoueurEnDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoueurEnDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoueurEnDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
