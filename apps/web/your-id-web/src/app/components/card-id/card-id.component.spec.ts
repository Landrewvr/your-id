import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { CardIdComponent } from './card-id';
import { provideHttpClientTesting } from '@angular/common/http/testing';

xdescribe('CardIdComponent', () => {
  let component: CardIdComponent;
  let fixture: ComponentFixture<CardIdComponent>;

  beforeEach(async () => {
    // Configure TestBed
    await TestBed.configureTestingModule({
      imports: [CardIdComponent],
      providers: [FormBuilder, provideHttpClient(),provideHttpClientTesting(),ActivatedRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(CardIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
