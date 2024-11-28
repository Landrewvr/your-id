import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FontAwesomeModule, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  faBars = faBars;
  loaderService = inject(LoaderService);
}
