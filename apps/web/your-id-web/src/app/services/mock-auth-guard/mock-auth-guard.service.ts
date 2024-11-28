import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthGuardService implements CanActivate {
  private shouldAllow = true;

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.shouldAllow;
  }
}