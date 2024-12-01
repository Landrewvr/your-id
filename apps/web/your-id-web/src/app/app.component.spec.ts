import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader/loader.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterOutlet, FontAwesomeModule, LoaderComponent, AppComponent],
      providers: [LoaderService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    loaderService = TestBed.inject(LoaderService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the loader based on LoaderService loadingState', () => {
    // Set the loader service state to true
    loaderService.loadingState.set(true);
    fixture.detectChanges();

    const loaderElement = fixture.debugElement.query(By.css('app-loader'));
    expect(loaderElement).toBeTruthy();

    // Set the loader service state to false
    loaderService.loadingState.set(false);
    fixture.detectChanges();

    const hiddenLoaderElement = fixture.debugElement.query(By.css('app-loader'));
    expect(hiddenLoaderElement).toBeFalsy();
  });
});
