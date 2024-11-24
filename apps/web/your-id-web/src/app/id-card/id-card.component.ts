import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faCheck, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-id-card',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss'
})
export class IdCardComponent {
  icons = {
    faPen: faPen,
    faCheck: faCheck,
    faUser: faUser
  }
  editMode = false;
}
