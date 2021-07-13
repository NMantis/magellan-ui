import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Recommendation } from 'src/app/models/Search.ts/Recommendation';
import { Favorite } from 'src/app/models/Users/Favorite';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {

  history: Recommendation[];
  selectedRec = new FormControl('');
  favorites: Favorite[];
  private destroyed$ = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }


  ngOnInit() {
    this.route.data
      .pipe(
        tap(({ history }) => {
          this.history = history;
          this.selectedRec.setValue(history[0]);
        }),
        switchMap(() => this.userService.favorites(true)),
        tap(favorites => this.favorites = favorites),
        tap(() => this.setRatings(this.history[0])),
        switchMap(() => this.selectedRec.valueChanges),
        takeUntil(this.destroyed$)
      ).subscribe(selection => this.setRatings(selection));
  }


  setRatings(recommendation: Recommendation) {
    recommendation.places = recommendation.places.map(place => {
      place['userRating'] = this.favorites.find(f => f.placeId == place.id)?.rating;
      return place;
    });

    this.selectedRec.setValue(recommendation, { emitEvent: false });
  }

  get selection() {
    return this.selectedRec.value?.places;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
