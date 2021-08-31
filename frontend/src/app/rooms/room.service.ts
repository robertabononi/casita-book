import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../authentication/token.service';
import { Room } from './room';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  userList(userName: string): Observable<Room> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.http.get<Room>(`${API}/${userName}/photos`, {
      headers,
    });
  }
}
