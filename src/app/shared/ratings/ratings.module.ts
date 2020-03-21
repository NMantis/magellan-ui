import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingsComponent } from './ratings.component';

@NgModule({
  declarations: [RatingsComponent],
  imports: [ CommonModule ],
  exports: [RatingsComponent]
})
export class RatingsModule { }