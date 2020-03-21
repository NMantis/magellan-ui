import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnChanges {
  @Input() rating: number;
  @Input() placeId: number;
  @Input() readonly: boolean;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  inputName: string;
  ngOnChanges() {
    this.inputName = this.placeId + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      placeId: this.placeId,
      rating: rating
    });
  }
}
