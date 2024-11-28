import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthGuardService implements CanActivate {
  private shouldAllow: boolean = true;

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.shouldAllow;
  }
}