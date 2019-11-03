import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  public register(userData: any) {
    return this.http.post<any>(`${this.baseUrl}/api/auth/signup`, userData, httpOptions)
  }
}