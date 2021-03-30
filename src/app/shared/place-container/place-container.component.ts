import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-place-container',
  templateUrl: './place-container.component.html',
  styleUrls: ['./place-container.component.scss']
})
export class PlaceContainerComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() place: any;
  @Output() userRating = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  get hasFood() {
    return this.place.types.includes('food')
  }
  get hasDrinks() {
    return this.place.types.includes('bar')
  }
  get hasCoffee() {
    return this.place.types.includes('cafe')
  }

  ratingComponentClick(rating: number): void {
    this.userRating.emit(rating)
  }

}
