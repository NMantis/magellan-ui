import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Place } from 'src/app/models/Places/Place';
import { Filters } from 'src/app/models/Filters';
import { Reccomendation, ReccomendationDTO } from 'src/app/models/Search.ts/Reccomendation';
import { map } from 'rxjs/operators';

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

  recommendations(id: string): Observable<Reccomendation> {
    const params = new HttpParams().set('recId', id);

    return this.http.get<ReccomendationDTO>(`${this.baseUrl}/api/search`, { params })
      .pipe(map(resp => new Reccomendation(resp)))
  }

}
