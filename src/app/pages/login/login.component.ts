import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedInValue)
      this.router.navigate(['']);

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password)
      .subscribe((firstLogin: boolean) => {

        const url = firstLogin ? '/welcome' : '';
        this.router.navigateByUrl(url, { replaceUrl: true });
      })
  }
}
