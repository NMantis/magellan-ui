import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/modules/material.module';
import { RegisterComponent } from './register.component';

const routes: Routes = [{
  path: '', component: RegisterComponent
}]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(routes)
  ],
  providers: [ { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  exports: [RegisterComponent]
})
export class RegisterModule { }