import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [RegisterComponent],
  imports: [ 
    CommonModule,
    MatCheckboxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
    exports: [RegisterComponent]
})
export class RegisterModule { }