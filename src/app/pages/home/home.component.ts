import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { simpleFadeIn } from 'src/app/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[simpleFadeIn]
})
export class HomeComponent implements OnInit {
  show: boolean;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router) { 
      this.matIconRegistry.addSvgIcon(
        `quickSearch`,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/icons/lighting.svg`)
      );
    }

  ngOnInit() {
    setTimeout(()=> this.show = true, 1400)
  }

}
