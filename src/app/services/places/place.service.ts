import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Place } from 'src/app/models/Places/Place';
import { Filters } from 'src/app/models/Filters';
import { Reccomendation } from 'src/app/models/Search.ts/Reccomendation';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getAllPlaces(filters: Filters): Observable<Place[]> {
    const params = filters.toParams();
    return this.http.get<Place[]>(`${this.baseUrl}/api/places/all`, { params });
  }

  getRecommendations(id: string): Observable<Reccomendation[]> {
    return of([new Reccomendation()])//this.http.get<Reccomendation[]>(`${this.baseUrl}/api/places/all`)
  }
}
