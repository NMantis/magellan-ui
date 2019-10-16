import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [LoginComponent],
  imports: [ 
    MatCheckboxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
    exports: [LoginComponent]
})
export class LoginModule { }