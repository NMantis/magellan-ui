import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public updateFavorites(favourites: any) {
    return this.http.put<any>(`${this.baseUrl}/api/users/update`, { favourites })
  }
}
