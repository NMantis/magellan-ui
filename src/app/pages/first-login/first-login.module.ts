import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/modules/material.module';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
import { FirstLoginComponent } from './first-login.component';
const routes: Routes = [
    {path: '', component: FirstLoginComponent}
  ]
@NgModule({
  declarations: [FirstLoginComponent],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule.forChild(routes),
    PlaceContainerModule,
    MatCheckboxModule
  ],
  exports: [FirstLoginComponent]
})
export class FirstLoginModule { }