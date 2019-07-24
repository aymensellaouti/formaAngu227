import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const LOGIN_API_LINK = 'http://localhost:3000/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class SecuritySericeService {

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  login(user) {
    return this.http.post(LOGIN_API_LINK, user);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
