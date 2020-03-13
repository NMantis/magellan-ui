import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-container',
  templateUrl: './place-container.component.html',
  styleUrls: ['./place-container.component.scss']
})
export class PlaceContainerComponent implements OnInit {
  @Input() readonly: boolean;
  @Input() place: any;
  constructor() { }

  ngOnInit() {
  }

  ratingComponentClick(clickObj: any): void {

    }

}
