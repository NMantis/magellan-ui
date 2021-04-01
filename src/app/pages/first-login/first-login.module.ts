import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { FirstLoginComponent } from './first-login.component';
import { PlaceListModule } from 'src/app/shared/place-list/place-list.module';

const routes: Routes = [
    {path: '', component: FirstLoginComponent}
  ]
  
@NgModule({
  declarations: [FirstLoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    PlaceListModule,
  ],
  exports: [FirstLoginComponent]
})
export class FirstLoginModule { }