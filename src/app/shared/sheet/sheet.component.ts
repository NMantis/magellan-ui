import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<SheetComponent>,
    private router: Router
    ) {}

  openLink(): void { this._bottomSheetRef.dismiss(); }

  logout() {
    localStorage.removeItem('access_token')
    this.router.navigateByUrl('/login')
  }
}
