import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

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
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  showError() {
    this._snackBar.open('Wrong Username or Password.', 'Ok', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['warning']
    });
  }
  public login(usernameOrEmail: string, password: string) {
    //console.log('i login service with : '+usernameOrEmail+' and '+ password)
    return this.http.post<any>(this.baseUrl + '/api/auth/signin', { usernameOrEmail, password }, httpOptions)
      .pipe(
        retry(1),
        catchError((error): any => {
          this.showError()
          return throwError(
            'Something bad happened; please try again later.');
        })
      );
  }

  public loginStatusUpdate() {
    //is called if login is successfull and updates the isLoggedIN boolean
    try {
      if (localStorage.getItem('jwt_token')) {
        AuthService.isLoggedIn = true;
      }
    } catch (error) {
      console.log(error)
    }
  }

  public logout() {
    if (localStorage.getItem('jwt_token')) {
      localStorage.removeItem('jwt_token')
      AuthService.isLoggedIn = false;
      this.router.navigateByUrl('/login')
    } else {
      alert('You are not Logged in!')
    }
  }
}