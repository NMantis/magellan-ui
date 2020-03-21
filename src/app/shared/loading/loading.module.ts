import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    SharedModule
  ],
    exports: [LoadingComponent]
})
export class LoadingModule { }