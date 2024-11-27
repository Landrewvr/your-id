import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri = 'http://localhost:3000/user/'
  private httpClient = inject(HttpClient);

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(this.uri + id);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.uri, user);
  }

  update(user: User & { _id: string }): Observable<User> {
    return this.httpClient.put<User>(this.uri + user._id,user);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.uri + id);
  }

}
