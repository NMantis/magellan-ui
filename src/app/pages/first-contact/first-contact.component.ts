import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-first-contact',
  templateUrl: './first-contact.component.html',
  styleUrls: ['./first-contact.component.scss'],
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
        query('@places', stagger(300, animateChild()))
      ]),
    ])
  ]
})
export class FirstContactComponent implements OnInit {
  places: Array<any> = [];
  ratingClicked: any;
  itemIdRatingClicked: any;
  constructor() { }

  ngOnInit() {
    const place = JSON.parse(localStorage.getItem('place'))
    place.rating = parseInt(place.rating)
    for(let i = 0; i<100; i++) {this.places.push(place)} 
  }

  ratingComponentClick(clickObj: any): void {
    const item = this.places.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = item.company;
    }

  }
}