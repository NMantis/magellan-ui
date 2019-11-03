import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private _snackBar: MatSnackBar){ }
    intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const idToken = localStorage.getItem("access_jwt_token");
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });            
            return next.handle(cloned)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => this.handleError(error))
            )
        }
        else {    
            return next.handle(req)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => this.handleError(error))
            )
        }
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `${error.error.message}`;
        } else {
            // server-side error
            if(error.status == 404)  errorMessage = 'Sorry, we couldn\'t find what you were looking for.'
           // else if(error.status == 500) this.router.navigateByUrl('/internal-server-error')
            else errorMessage = `${error.message}`;
        }
        console.log(errorMessage)
        this._snackBar.open('Something bad happened. Try again later.', 'Ok', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['warning']
          });
        return throwError(errorMessage);
    }
}