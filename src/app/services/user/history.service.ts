import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  public show(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/search/quick/user`);
  }

}
