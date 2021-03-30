import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/Users/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  public register(user: User) {
    return this.http.post<any>(`${this.baseUrl}/api/auth/signup`, user)
  }
}