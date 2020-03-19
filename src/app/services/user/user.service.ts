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
export class UserService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  public updateFavorites(userFavorites: any) {
    return this.http.put<any>(`${this.baseUrl}/api/users/update/favourites`, {favourites:userFavorites}, httpOptions)
  }
}
