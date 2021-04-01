import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PlaceListComponent } from './place-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PlaceListComponent],
  imports: [
    MatProgressBarModule,
    SharedModule,
    RouterModule,
    PlaceContainerModule,
    MatCheckboxModule
  ],
  exports: [PlaceListComponent]
})
export class PlaceListModule { }