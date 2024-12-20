import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule, formatDate } from '@angular/common';
import { Component, effect, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

import { faCheck, faPen, faTrash, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AccountInformationComponent } from '../account-information/account-information.component';
import { AddressComponent } from '../address/address.component';
import { DocumentsComponent } from '../documents/documents.component';
import { LoaderService } from '../../services/loader/loader.service';
import { patterns } from '../../consts/patterns';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { User } from '../../types/user';
import { UserService } from '../../services/user/user.service';

const COMPONENTS = [
  AccountInformationComponent, 
  AddressComponent, 
  PersonalInformationComponent, 
  DocumentsComponent
];

@Component({
  selector: 'app-card-id',
  imports: [ 
    ...COMPONENTS,
    FontAwesomeModule, 
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './card-id.component.html',
  styleUrl: './card-id.component.scss'
})
export class CardIdComponent {
  paramSignal!: Signal<Params | undefined>;
  userForm!: FormGroup;
  user: User | undefined;

  editMode = false;
  formSubmitted =false;

  icons = {
    faPen: faPen,
    faCheck: faCheck,
    faUser: faUser,
    faTrash: faTrash,
    faX: faX
  };
  constructor(
    private readonly userService: UserService,
    private readonly activeRoute: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly loaderService: LoaderService
  ) {
    this.paramSignal = toSignal(this.activeRoute.params);
    this.loaderService.loadingState.set(true);

    effect(() => {
      const params = this.paramSignal();
      const userId = params ? params['id'] : '0';
      this.userForm = this.fb.group({
        firstName: this.fb.control('', [Validators.required]),
        lastName: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        cellPhoneNumber: this.fb.control('', [Validators.required, Validators.pattern(patterns.PHONE)]),
        address: this.fb.control('', [Validators.required, Validators.pattern(patterns.ADDRESS)]),
        mailingAddress: this.fb.control('', [Validators.pattern(patterns.ADDRESS)]),
        ssn: this.fb.control('', [Validators.required, Validators.pattern(patterns.SSN)]),
        dateOfBirth: this.fb.control('', [Validators.required]),
        medicareBeneficiaryIdentifiers: this.fb.control('', [Validators.required, Validators.pattern(patterns.MEDICARE_IDENTIFIERS)]),
      });

      if (userId === '0') {
        this.loaderService.loadingState.set(false);
        this.editMode = true;
        
        return;
      }

      this.userService.getUserById(userId).subscribe({ next: (res) => {
        this.loaderService.loadingState.set(false);

        if (!res) return;
 
        this.user = res;
        this.setFormValues();
      },
      error: (err) => {
        alert(err.error.message);
        this.loaderService.loadingState.set(false);
        this.editMode = true;
        this.reloadParams('0');
      } });
    });
  }

  setFormValues() {
    if (!this.user) return;

    this.userForm.patchValue({
      ...this.user,
      dateOfBirth: 
      formatDate(this.user.dateOfBirth, 'yyyy-MM-dd', 'en')
    });
  }

  deleteUser() {
    if (!this.user || !this.user._id) return;
    if (!confirm('You are about to delete this user, do you want to proceed?')) return;

    this.loaderService.loadingState.set(true);
    this.userService.delete(this.user._id).subscribe({ next: () => {
      this.loaderService.loadingState.set(false);

      alert('User deleted successfully');

      this.user = undefined;
      this.resetForm();
      this.reloadParams('0');
    },
    error: err => {
      this.loaderService.loadingState.set(false);
      alert(err.error.message);
    } });
  }

  save() {
    this.formSubmitted = true;
    this.userForm.markAsDirty();

    if (this.userForm.invalid) return;
    this.loaderService.loadingState.set(true);

    const saveRequest = (this.user && this.user._id)
      ? this.userService.update({
        ...this.userForm.value,
        _id: this.user._id
      })
      : this.userService.create(this.userForm.value);

    saveRequest.subscribe({ next: (res) => {
      this.loaderService.loadingState.set(false);

      alert('User saved successfully');

      this.user = res;
      this.resetForm();
      this.reloadParams(this.user._id ?? '');
    },
    error: err => {
      this.loaderService.loadingState.set(false);
      alert(err.error.message);
    } });
  }

  resetForm() {
    this.editMode = false;
    this.formSubmitted = false;
    this.userForm.markAsPristine();
  }

  reloadParams(id: string) {
    this.router.navigate(['../', id], { relativeTo: this.activeRoute });
  }
}
