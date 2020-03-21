import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { list, places } from 'src/app/animations';
import { PlaceService } from 'src/app/services/places/place.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.scss'],
  animations: [ list, places ]
})
export class FirstLoginComponent implements OnInit,AfterViewInit {
  places: any;
  allPlaces: any;
  filteredPlaces: any;
  types: string[] = ['food', 'bar', 'cafe']
  food = [];
  bar = [];
  cafe = [];
  favorites = [];
  constructor(
    public placeService: PlaceService,
    public userService: UserService,
    private router: Router) { }

  ngAfterViewInit(): void { window.scroll(0,0) }
  
  ngOnInit() {
    this.placeService.getAllPlaces()
      .subscribe(places => {
        places.map(place => {
          delete place.rating
          return place;
        })
        this.filteredPlaces = places;

        places.forEach(place => {
          if (place.types)
            if (place.types.includes('food'))
              this.food.push(place);
            else if (place.types.includes('bar'))
              this.bar.push(place)
            else if (places.types.includes('cafe'))
              this.cafe.push(place)
        })

      })
  }

  filter(checkbox) {
    console.log(checkbox)
    if (checkbox.checked)
      this.filteredPlaces = this.filteredPlaces.filter(p => p.types.includes(checkbox.source.name))
    else 
      if(checkbox.source.name == 'bar')
        this.filteredPlaces = this.food.concat(this.cafe)
      else if (checkbox.source.name == 'cafe')
        this.filteredPlaces = this.food.concat(this.bar)
      else
        this.filteredPlaces = this.cafe.concat(this.bar)
  }

  updateFavorites(){
    this.userService.updateFavorites(this.favorites)
      .subscribe(()=> this.router.navigateByUrl(''))
  }

  saveRatings(userRating) {
    let alreadyExists: boolean = false;
    this.favorites.forEach(place => {
      if(place.placeId == userRating.placeId){
        place.rating = userRating.rating;
        alreadyExists = true
      }
    })
    if(!alreadyExists)
      this.favorites.push(userRating)

    console.log(this.favorites)
  }
}
