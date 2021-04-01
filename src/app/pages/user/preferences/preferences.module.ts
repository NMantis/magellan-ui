import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PlaceListModule } from 'src/app/shared/place-list/place-list.module';
import { PreferencesComponent } from './preferences.component';

const routes: Routes = [
    {path: '', component: PreferencesComponent}
  ]
  
@NgModule({
  declarations: [PreferencesComponent],
  imports: [
    SharedModule,
    PlaceListModule,
    RouterModule.forChild(routes)
  ],
    exports: [PreferencesComponent]
})
export class PreferencesModule { }