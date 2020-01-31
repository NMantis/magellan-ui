import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';
//import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdvancedSearchComponent } from './advanced-search.component';

const routes: Routes = [
    {path: '', component: AdvancedSearchComponent}
  ]
@NgModule({
  declarations: [AdvancedSearchComponent],
  imports: [
    CommonModule, 
    //MatCheckboxModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
    exports: [AdvancedSearchComponent]
})
export class AdvancedSearchModule { }