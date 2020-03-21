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
export class PlaceService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getAllPlaces() {
    return this.http.get<any>(`${this.baseUrl}/api/places/all`)
  }

  getRecommendations(id: string) {
    return this.http.get<any>(`${this.baseUrl}/api/places/all`)
  }
}
