import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings.component';

@NgModule({
  declarations: [RatingsComponent],
  imports: [ CommonModule ],
  exports: [RatingsComponent, CommonModule]
})
export class RatingsModule { }