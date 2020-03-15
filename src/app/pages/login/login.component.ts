import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,public authService: AuthService,public router: Router) { }
  loginForm: FormGroup;
  ngOnInit() {
    if (this.authService.isLoggedInValue)
      this.router.navigate([''])
      
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    let emaill = this.loginForm.get('email').value
    let passwordd = this.loginForm.get('password').value
    this.authService.login(emaill, passwordd)
      .subscribe((firstLogin: boolean) => {  
          firstLogin? 
            this.router.navigateByUrl('/welcome') :
            this.router.navigateByUrl('')     
        })
  }
}
