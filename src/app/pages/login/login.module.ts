import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, 
    MatCheckboxModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
    exports: [LoginComponent]
})
export class LoginModule { }