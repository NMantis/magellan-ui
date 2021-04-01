import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PlaceContainerModule } from 'src/app/shared/place-container/place-container.module';
import { PreferencesComponent } from './preferences.component';
const routes: Routes = [
    {path: '', component: PreferencesComponent}
  ]
@NgModule({
  declarations: [PreferencesComponent],
  imports: [
    SharedModule,
    PlaceContainerModule,
    RouterModule.forChild(routes)
  ],
    exports: [PreferencesComponent]
})
export class PreferencesModule { }