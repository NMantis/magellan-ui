import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { simpleFadeIn } from 'src/app/animations';
import { SearchService } from 'src/app/services/places/search.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [simpleFadeIn]
})
export class HomeComponent implements OnInit {
  show: boolean;
  loading: boolean;
  constructor(
    public searchService: SearchService,
    private matIconRegistry: MatIconRegistry,
    private router: Router,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `quickSearch`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/icons/lighting.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `search`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../assets/icons/search.svg`)
    );
  }

  ngOnInit() { setTimeout(() => this.show = true, 1400) }

  quickSearch() {
    this.loading = true
    setTimeout(() => {
      this.searchService.quickSearch()
        .pipe(finalize(() => this.loading = false))
        .subscribe(resp => {
          //this.router.navigateByUrl(`recommendations/${resp.id}`)
        })
    }, 4000)
  }
}