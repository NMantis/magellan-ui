import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from 'src/app/models/Users/Favorite';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public favorites(slim?: boolean): Observable<Favorite[]> {
    // Query Param slim=slim/full;
    return this.http.get<any>(`${this.baseUrl}/api/users/favorites`);
  }

  public updateFavorites(favourites: Favorite[]): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/api/users/update`, { favourites })
  }
}
