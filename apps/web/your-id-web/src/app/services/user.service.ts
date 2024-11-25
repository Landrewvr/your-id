import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly httpClient: HttpClient) { 

  }
  // getUserById(): Observable<User> {
  //   return {} as User;
  // }

  save() {
      
  }

  update() {
    
  }

  delete() {

  }

}
