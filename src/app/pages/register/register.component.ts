import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/user/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  startDate = new Date(1990, 0, 1);
  maxDate = new Date(2011, 0, 1);
  minDate = new Date(1900, 0, 1);
  constructor(private fb: FormBuilder,public registerService: RegisterService,public router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      firstName: [null, [Validators.required, Validators.pattern('[a-zA-Z α-ωΑ-Ω΄όίήύώέάΆΈΊΌΎΉΏ]{3,16}')]],
      lastName: [null, [Validators.required, Validators.pattern('[a-zA-Z α-ωΑ-Ω΄όίήύώέάΆΈΊΌΎΉΏ]{3,16}')]],
      dob: [{value: null, disabled: true}, Validators.required],
      gender:[null],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.MustMatch('password', 'confirmPassword') });    
  }

  MustMatch(controlName: string, matchingControlName: string) {
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
    let user = this.userForm.getRawValue()
    user['role']='user';
    this.registerService.register(user)
    .subscribe(()=> this.router.navigateByUrl('/login'))
  }
}