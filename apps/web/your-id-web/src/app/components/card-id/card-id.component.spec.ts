import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIdComponent } from './card-id';

describe('CardIdComponent', () => {
  let component: CardIdComponent;
  let fixture: ComponentFixture<CardIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIdComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
