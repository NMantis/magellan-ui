import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { retry, catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = environment.apiUrl
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  public register(userData: any) {
    return this.http.post<any>(this.baseUrl + '/api/auth/signup', userData, httpOptions)
      .pipe(
        retry(1),
        catchError((error): any => {
          if(error.error) this.showError(error.error)
        })
      )
  }

  showError(error) {
    this._snackBar.open(error, 'Ok', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['warning']
    });
  }
}