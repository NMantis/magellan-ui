import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-contact',
  templateUrl: './first-contact.component.html',
  styleUrls: ['./first-contact.component.scss']
})
export class FirstContactComponent implements OnInit {
  places: Array<any> = [];
  constructor() { }

  ngOnInit() {
    const place = JSON.parse(localStorage.getItem('place'))
    for(let i = 0; i<100; i++) {this.places.push(place)} 
    console.log(this.places)
  }

}