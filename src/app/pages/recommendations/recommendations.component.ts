import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { list, places } from 'src/app/animations';
import { Reccomendation } from 'src/app/models/Search.ts/Reccomendation';
import { PlaceService } from 'src/app/services/places/place.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  animations: [ list, places ]
})
export class RecommendationsComponent implements OnInit {

  reccomendation: Reccomendation;
  zero = 0;
  duration = 1;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
    ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.placeService.recommendations(params.get('id')))
    ).subscribe(recc => this.reccomendation = recc);
  }

}