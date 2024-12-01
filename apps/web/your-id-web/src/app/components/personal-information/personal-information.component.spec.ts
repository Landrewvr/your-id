import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './personal-information.component';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    formBuilder = new FormBuilder();

    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule,PersonalInformationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInformationComponent);
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

  it('should accept editMode as an input and set its value correctly', () => {
    component.editMode = true;

    fixture.detectChanges();

    expect(component.editMode).toBe(true);
  });
});
