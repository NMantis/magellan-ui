import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PlaceService } from 'src/app/services/places/place.service';
import { list, places } from 'src/app/animations';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  animations: [ list, places ]
})
export class RecommendationsComponent implements OnInit {

  constructor(private route: ActivatedRoute,public placeService: PlaceService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.placeService.getRecommendations(params.get('id')))
    ).subscribe()
  }

}