import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-place-container',
  templateUrl: './place-container.component.html',
  styleUrls: ['./place-container.component.scss']
})
export class PlaceContainerComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() place: any;
  @Output() userRating = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  ratingComponentClick(rating): void {
    this.userRating.emit(rating)
  }

}
