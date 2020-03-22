import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { SheetComponent } from './sheet.component';

@NgModule({
  declarations: [SheetComponent],
  imports: [ CommonModule,MatListModule ],
  entryComponents: [
    SheetComponent
  ],
  exports: [SheetComponent]
})
export class SheetModule { }