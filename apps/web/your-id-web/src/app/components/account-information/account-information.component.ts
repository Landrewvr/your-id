import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-information',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './account-information.component.html',
  styleUrl: './account-information.component.scss'
})
export class AccountInformationComponent {
  @Input() userForm!: FormGroup;
  @Input() formSubmitted = false;
}
