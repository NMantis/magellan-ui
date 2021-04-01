import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ProfileComponent } from './profile.component';

const routes: Routes = [{
  path: '', component: ProfileComponent
}]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }