import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  advancedSearch(preferences: any, type?: "content" | "collaborative") {
    return this.http.post<any>(`${this.baseUrl}/api/search/advanced`, preferences )
  }

  quickSearch(type?: "content" | "collaborative") {
    return this.http.post<any>(`${this.baseUrl}/api/search/quick`, {} )
  }
}