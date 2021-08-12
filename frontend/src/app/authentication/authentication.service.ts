import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  urlApi = 'http://localhost:3000/user/login'

  constructor(private httpClient: HttpClient) {}

  authenticate(user: string, password: string): Observable<any> {
    return this.httpClient.post(this.urlApi, {
      userName: user,
      // tslint:disable-next-line: object-literal-shorthand
      password: password
    })
  }
}
