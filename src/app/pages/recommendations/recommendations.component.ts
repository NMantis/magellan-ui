import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { list, places } from 'src/app/animations';
import { Recommendation } from 'src/app/models/Search.ts/Recommendation';
import { Favorite } from 'src/app/models/Users/Favorite';
import { PlaceService } from 'src/app/services/places/place.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  animations: [list, places]
})
export class RecommendationsComponent implements OnInit {

  reccomendation: Recommendation;
  favorites: Favorite[];
  zero = 0;
  duration = 1;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.placeService.recommendations(params.get('id'))),
      tap(recc => this.reccomendation = recc),
      switchMap(() => this.userService.favorites(true))
    ).subscribe(resp => this.setRatings(resp));
  }


  setRatings(favorites: Favorite[]) {
    this.reccomendation.places = this.reccomendation.places.map(place => {
      place['userRating'] = favorites.find(f => f.placeId == place.id)?.rating;
      return place;
    })
  }
}