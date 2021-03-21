import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<SheetComponent>,
    private router: Router,
    private auth: AuthService
    ) {}

  openLink(): void { 
    this._bottomSheetRef.dismiss();
  }

  logout() {
    this._bottomSheetRef.dismiss();
    this.auth.logout();
  }
}
