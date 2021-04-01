import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { LoginComponent } from './login.component';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatCheckboxModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
    exports: [LoginComponent]
})
export class LoginModule { }