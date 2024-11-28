import { CommonModule, formatDate } from '@angular/common';
import { Component, effect, Signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faCheck, faUser, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../types/user';
import { patterns } from '../../consts/patterns';
import { UserService } from '../../services/user/user.service';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-id-card',
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss'
})
export class IdCardComponent {
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
  }
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
      })

      if (userId === '0') {
        this.loaderService.loadingState.set(false);
        this.editMode = true;
        
        return;
      }

      this.userService.getUserById(userId).subscribe({next: (res) => {
        this.loaderService.loadingState.set(false);

        if (!res) return;
 
        this.user = res;
        this.setFormValues()
      },error: (err) => {
        alert(err.error.message);
        this.loaderService.loadingState.set(false);
        this.editMode = true;
        this.reloadParams('0');
      }});
      });
  }

  setFormValues() {
    if (!this.user) return;

    this.userForm.patchValue({
      ...this.user, dateOfBirth: 
      formatDate(this.user.dateOfBirth, 'yyyy-MM-dd', 'en')
    });
  }

  deleteUser() {
    if(!this.user || !this.user._id) return;
    if (!confirm('You are about to delete this user, do you want to proceed?')) return;

    this.loaderService.loadingState.set(true);
    this.userService.delete(this.user._id).subscribe({next: () => {
      this.loaderService.loadingState.set(false);

      alert('User deleted successfully');

      this.user = undefined;
      this.resetForm();
      this.reloadParams('0')
    },error: err => {
      this.loaderService.loadingState.set(false);
      alert(err.error.message);
    }});
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

    saveRequest.subscribe({next: (res) => {
      this.loaderService.loadingState.set(false);

      alert('User saved successfully');

      this.user = res;
      this.resetForm();
      this.reloadParams(this.user._id ?? '');
    },error: err => {
      this.loaderService.loadingState.set(false);
      alert(err.error.message);
    }});
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
