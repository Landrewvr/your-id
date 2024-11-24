import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { encrypt, decrypt } from './test';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faBars = faBars;

  ngOnInit(): void {
    const test = encrypt('123-43-5432',6);
    console.log(test);
    console.log(decrypt('89;3=7376>9',6));
  }
}
