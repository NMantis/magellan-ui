import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-contact',
  templateUrl: './first-contact.component.html',
  styleUrls: ['./first-contact.component.scss']
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