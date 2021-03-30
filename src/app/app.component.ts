import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth-services/auth.service';
import { Router } from '@angular/router';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  helper = new JwtHelperService(); 

  constructor(
    private authService: AuthService,
    private router: Router,
    protected themeService: ThemeService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      if (this.helper.isTokenExpired(localStorage.getItem('access_token'))) {
        //token is expired if it returns True
        this.authService.setLoggedIn = false
        localStorage.removeItem('access_token')
        this.router.navigateByUrl('/login')
      } else {
        //token is not expired if it returns false
        this.authService.setLoggedIn = true
      }
    } else {
      this.authService.setLoggedIn = false
      this.router.navigateByUrl('/login')
    }
  }
}
