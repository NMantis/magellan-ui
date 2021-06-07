import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from 'src/app/models/Places/Place';
import { Filters } from 'src/app/models/Filters';
import { Recommendation, RecommendationDTO } from 'src/app/models/Search.ts/Recommendation';
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

  recommendations(id: string): Observable<Recommendation> {
    const params = new HttpParams().set('recId', id);

    return this.http.get<RecommendationDTO>(`${this.baseUrl}/api/search`, { params })
      .pipe(map(resp => new Recommendation(resp)))
  }

}
