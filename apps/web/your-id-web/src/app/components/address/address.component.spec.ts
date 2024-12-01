import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address.component';
import { CommonModule } from '@angular/common';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    formBuilder = new FormBuilder();

    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule,AddressComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should accept a FormGroup as an input', () => {
    const mockFormGroup = formBuilder.group({
      firstName: formBuilder.control(''),
      lastName: formBuilder.control(''),
      email: formBuilder.control(''),
      cellPhoneNumber: formBuilder.control(''),
      address: formBuilder.control(''),
      mailingAddress: formBuilder.control(''),
      ssn: formBuilder.control(''),
      dateOfBirth: formBuilder.control(''),
      medicareBeneficiaryIdentifiers: formBuilder.control(''),
    });

    component.userForm = mockFormGroup;

    fixture.detectChanges();

    expect(component.userForm).toBe(mockFormGroup);
  });

  it('should accept formSubmitted as an input and set its value correctly', () => {
    component.formSubmitted = true;

    fixture.detectChanges();

    expect(component.formSubmitted).toBe(true);
  });
});
