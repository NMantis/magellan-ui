import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  protected jwtHelper = new JwtHelperService()
  constructor(){ }

  canActivate() {
    const token = localStorage.getItem('access_jwt_token')
    if (token !== null) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }
}