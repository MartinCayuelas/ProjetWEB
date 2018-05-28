import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  public signUp(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/signUp', user);
  }

  public signIn(model): Observable<any> {
    return this.http.post<any>('/api/auth/signIn', model);
  }


  loggedIn() {

    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigate(['/home']);

  }

  getToken() {
    return localStorage.getItem('token');
  }
}
