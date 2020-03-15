import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/places/place.service';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.scss'],
  animations: [
    trigger('places', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@places', stagger(200, animateChild()))
      ]),
    ])
  ]
})
export class FirstLoginComponent implements OnInit {
  places: any;
  allPlaces: any;
  filteredPlaces: any;
  types: string[] = ['food', 'bar', 'cafe']
  food = [];
  bar = [];
  cafe = [];
  favorites = [];
  constructor(
    public placeService: PlaceService) { }
    //public userService: UserService) { }

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
