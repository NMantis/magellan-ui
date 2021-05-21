import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ReccomendationService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  user() {
    return this.http.get<any>(`${this.baseUrl}/api/search/quick/user`)
  }

  search() {
    return this.http.get<any>(`${this.baseUrl}/api/search/quick/search`)
  }
}