import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { RatingsModule } from 'src/app/shared/ratings/ratings.module';
import { PlaceContainerComponent } from './place-container.component';

@NgModule({
  declarations: [PlaceContainerComponent],
  imports: [
    SharedModule,
    RatingsModule
  ],
    exports: [PlaceContainerComponent]
})
export class PlaceContainerModule { }