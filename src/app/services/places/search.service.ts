import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  advancedSearch(preferences: any) {
    return this.http.post<any>(`${this.baseUrl}/api/search/advanced`, preferences, httpOptions )
  }

  quickSearch() {
    return this.http.post<any>(`${this.baseUrl}/api/search/quick`, {}, httpOptions )
  }
}