import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/Places/Place';

@Component({
  selector: 'recommendation-card',
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.scss']
})
export class RecommendationCardComponent implements OnInit {

  @Input()
  place: Place;
  
  zero = 0;
  duration = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
