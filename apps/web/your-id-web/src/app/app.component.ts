import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  faBars = faBars;

  // ngOnInit(): void {
  //   const test = encrypt('2FS5-RE1-SF06',6);
  //   console.log(test);
  //   console.log(decrypt('7KM:3ZK;3SQ=9',6));
  // }
}
