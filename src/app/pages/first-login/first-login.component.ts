import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { auditTime, filter, finalize, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { list, places } from 'src/app/animations';
import { Filters } from 'src/app/models/Filters';
import { Place } from 'src/app/models/Places/Place';
import { Favorite } from 'src/app/models/Users/Favorite';
import { PlaceService } from 'src/app/services/places/place.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.scss'],
  animations: [list, places]
})
export class FirstLoginComponent implements OnInit, AfterViewInit, OnDestroy {

  places: Place[] = [];
  favorites: Favorite[] = [];
  loading: boolean = true;
  hasResults: boolean = true;

  form = new FormGroup({
    bar: new FormControl(false),
    food: new FormControl(false),
    cafe: new FormControl(false)
  });

  private filters$ = new BehaviorSubject<Filters>(new Filters());
  private destroyed$ = new Subject<boolean>();

  constructor(
    public placeService: PlaceService,
    public userService: UserService,
    private router: Router
  ) { }

  ngAfterViewInit(): void { window.scroll(0, 0) }

  ngOnInit() {

    this.form.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        map(changes => Object.keys(changes).filter(key => !!changes[key])))
      .subscribe((types: string[]) => {

        const filters = new Filters({ types: types });
        this.places = [];
        this.filters$.next(filters);
        
      });

    this.filters$.pipe(
      takeUntil(this.destroyed$),
      tap(() => this.loading = true),
      auditTime(300),
      switchMap(filters => this.placeService.getAllPlaces(filters).pipe(
        finalize(() => this.loading = false),
        tap(results => this.hasResults = !!results?.length)
      )),
      filter(places => !!places?.length),
      map(places => places.map(place => ({ ...place, 'rating': undefined })))
    ).subscribe(places => this.loadPlaces(places))

  }

  loadPlaces(data: Place[]) {
    this.places = this.places.concat(data);
  }

  load() {
    if (this.loading) return;

    const filters = this.filters$.value;
    filters.pageNo++;

    this.filters$.next(filters)
  }

  updateFavorites() {
    this.userService
      .updateFavorites(this.favorites)
      .subscribe(() => this.router.navigateByUrl('', { replaceUrl: true }))
  }

  saveRatings(userRating: Favorite) {
    let alreadyExists: boolean = false;
    this.favorites.forEach(place => {

      if (place.placeId == userRating.placeId) {
        place.rating = userRating.rating;
        alreadyExists = true;
      }
    })

    if (!alreadyExists)
      this.favorites.push(userRating)
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
