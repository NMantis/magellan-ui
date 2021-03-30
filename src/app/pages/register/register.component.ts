import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { RegisterService } from 'src/app/services/user/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  maxDate = new Date(2011, 0, 1);
  startDate = new Date(2000, 0, 1);
  minDate = new Date(1921, 0, 1);
  
  constructor(
    private fb: FormBuilder,
    public registerService: RegisterService,
    public router: Router,
    public authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedInValue)
    this.router.navigate([''])
    
    this.userForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      username: [null, [Validators.required]],
      firstName: [null, [Validators.required, Validators.pattern('[a-zA-Z α-ωΑ-Ω΄όίήύώέάΆΈΊΌΎΉΏ]{3,16}')]],
      lastName: [null, [Validators.required, Validators.pattern('[a-zA-Z α-ωΑ-Ω΄όίήύώέάΆΈΊΌΎΉΏ]{3,16}')]],
      dob: [this.maxDate, Validators.required],
      gender:[null],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.mustMatch('password', 'confirmPassword') });    
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch)
        return;
      if (control.value !== matchingControl.value)
        matchingControl.setErrors({ mustMatch: true })
      else
        matchingControl.setErrors(null);
    }
  }

  onSubmit(){
    let user = this.userForm.getRawValue();
    this.registerService.register(user)
    .subscribe(()=> this.router.navigateByUrl('/login'))
  }
}