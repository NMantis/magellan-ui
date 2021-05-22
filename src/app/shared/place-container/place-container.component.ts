import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Place } from 'src/app/models/Places/Place';

@Component({
  selector: 'app-place-container',
  templateUrl: './place-container.component.html',
  styleUrls: ['./place-container.component.scss']
})
export class PlaceContainerComponent implements OnInit {
  @Input() 
  readonly: boolean;

  @Input() 
  place: Place;

  @Output() userRating = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { 
    this.place = new Place(this.place);
  }

  ratingComponentClick(rating: number): void {
    this.userRating.emit(rating);
  }

}
