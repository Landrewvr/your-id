import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri = environment.apiUrl;
  private options = { headers: new HttpHeaders({ authorization: environment.token }) };

  private httpClient = inject(HttpClient);

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.uri}user/${id}`, this.options);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.uri}user/`, user, this.options);
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.uri}user/${user._id}`, user, this.options);
  }

  delete(id: string): Observable<{ message: string }> {
    return this.httpClient.delete<{ message: string }>(`${this.uri}user/${id}`, this.options);
  }
}
