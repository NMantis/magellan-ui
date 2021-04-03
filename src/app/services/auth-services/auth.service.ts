import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap, mergeMap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl
  static isLoggedIn: Boolean;

  set setLoggedIn(value: Boolean) {
    AuthService.isLoggedIn = value;
  }

  get isLoggedInValue() {
    return AuthService.isLoggedIn;
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(usernameOrEmail: string, password: string) {
    const signin = this.http.post<any>(this.baseUrl + '/api/auth/signin', { usernameOrEmail, password }, httpOptions);
    const firstLogin = this.http.get<{ firstLogin: boolean }>(`${this.baseUrl}/api/users/first`)
      .pipe(map(resp => resp.firstLogin));

    return signin.pipe(
      tap(resp => {

        if (resp.accessToken) {
          localStorage.setItem('access_token', resp.accessToken);
          AuthService.isLoggedIn = true;
        }

      }),
      mergeMap(() => firstLogin))
  }

  public loginStatusUpdate() {
    //is called if login is successfull and updates the isLoggedIN boolean
    if (localStorage.getItem('access_token'))
      AuthService.isLoggedIn = true;
  }

  public logout() {
    if (localStorage.getItem('access_token')) {
      localStorage.removeItem('access_token')
      AuthService.isLoggedIn = false;
      this.router.navigateByUrl('/login')
    } else {
      alert('You are not Logged in!')
    }
  }
}