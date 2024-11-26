import { CommonModule, formatDate } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faCheck, faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../types/user';

@Component({
  selector: 'app-id-card',
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss'
})
export class IdCardComponent {
  private  = inject(ActivatedRoute);
  paramSignal!:Signal<Params | undefined>;
  editMode = false;
  userForm!: FormGroup;
  user!: User;

  icons = {
    faPen: faPen,
    faCheck: faCheck,
    faUser: faUser,
    faTrash: faTrash
  }
  constructor(
    private readonly userService: UserService,
    private readonly activeRoute: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      email: this.fb.control(''),
      cellPhoneNumber: this.fb.control(''),
      homeAddress: this.fb.group(''),
      mailingAddress: this.fb.group(''),
      ssn: this.fb.control(''),
      dateOfBirth: this.fb.control(''),
      medicareBeneficiaryIdentifiers: this.fb.control(''),
    })
    this.paramSignal = toSignal(this.activeRoute.params);
    this.getUser();
  }

  getUser() {
    const params = this.paramSignal();
    const userId = params ? params['id'] : '0';

    if (userId === '0') return;

    this.userService.getUserById(userId).subscribe({next: (res) => {
      this.user = res;
      this.setFormValues()
    },error: err => console.error(err)});
  }
  
  setFormValues() {
    this.userForm.patchValue({...this.user, dateOfBirth: formatDate(this.user.dateOfBirth, 'yyyy-MM-dd', 'en')});
  }

  deleteUser() {
    if(!this.user || !this.user._id) return;

    if (!confirm('You are about to delete this user, do you want to proceed?')) return;

    this.userService.delete(this.user._id).subscribe(res => console.log(res));
  }

  save() {
    const saveRequest = (this.user && this.user._id)
    ? this.userService.update({
      ...this.userForm.value,
      _id: this.user._id
    })
    : this.userService.create(this.userForm.value);

    saveRequest.subscribe(res => {
      this.router.navigate(['../', res._id], { relativeTo: this.activeRoute });
      this.editMode = false;
    });
  }
  
}
