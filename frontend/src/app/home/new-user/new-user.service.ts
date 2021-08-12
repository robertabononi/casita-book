import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  url = 'http://localhost:3000/user/signup'

  constructor(private http: HttpClient) {}

  registerNewUser(newUser: NewUser) {
    return this.http.post(this.url, newUser);
  }
}
