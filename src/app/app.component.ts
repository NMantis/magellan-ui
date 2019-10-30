import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  helper = new JwtHelperService(); 
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('jwt_token')) {
      if (this.helper.isTokenExpired(localStorage.getItem('jwt_token'))) {
        //token is expired if it returns True
        this.authService.setLoggedIn = false
        localStorage.removeItem('jwt_token')
      } else {
        //token is not expired if it returns false
        this.authService.setLoggedIn = true
      }
    } else {
      this.authService.setLoggedIn = false
    }
  }
}
