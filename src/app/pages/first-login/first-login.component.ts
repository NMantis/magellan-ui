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
  constructor(public placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.getAllPlaces()
    .subscribe(places => {
      places.map(place => {
        place.rating = parseInt(place.rating)
        return place;
      })
      this.places = places || []
    })
  }

}
