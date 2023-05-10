import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeJoueurComponent } from './listde-joueur.component';

describe('ListdeJoueurComponent', () => {
  let component: ListdeJoueurComponent;
  let fixture: ComponentFixture<ListdeJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdeJoueurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdeJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
