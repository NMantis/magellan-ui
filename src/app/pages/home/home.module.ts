import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/modules/material.module';
import { HomeComponent } from './home.component';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule,
    LoadingModule
  ],
    exports: [HomeComponent]
})
export class HomeModule { }