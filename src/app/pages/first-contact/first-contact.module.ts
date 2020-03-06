import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirstContactComponent } from './first-contact.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RatingsModule } from 'src/app/shared/ratings/ratings.module';
const routes: Routes = [
    {path: '', component: FirstContactComponent}
  ]
@NgModule({
  declarations: [FirstContactComponent],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule.forChild(routes),
    MatCheckboxModule,
    RatingsModule
  ],
    exports: [FirstContactComponent]
})
export class FirstContactModule { }