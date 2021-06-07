import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recommendation, RecommendationDTO } from 'src/app/models/Search.ts/Recommendation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns User's latest 5 search results.
   */
  public show(): Observable<Recommendation[]> {
    return this.http.get<RecommendationDTO[]>(`${this.baseUrl}/api/search/history`)
      .pipe(
        map(resp => resp.map(r => new Recommendation(r)))
      );
  }

}
