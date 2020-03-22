import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { SheetComponent } from './sheet.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SheetComponent],
  imports: [ 
    CommonModule,
    MatListModule,
    RouterModule 
  ],
  entryComponents: [
    SheetComponent
  ],
  exports: [SheetComponent]
})
export class SheetModule { }