import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<SheetComponent>) {}

  openLink(): void { this._bottomSheetRef.dismiss(); }
}
