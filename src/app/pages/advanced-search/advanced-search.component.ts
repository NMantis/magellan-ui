import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @ViewChild('addresstext', { static: false }) addresstext: any;
  autocompleteInput: string;
  kmArray: Array<number> = []
  map: google.maps.Map;
  lat = 37.9838096;
  lng = 23.7275388;
  chosenRadius = new google.maps.Circle();
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 14,
    disableDefaultUI: true
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  radius: number;
  rating:string;
  category: string;
  price: string;
  constructor(private location: Location) { }
  ngOnInit() { for(let i = 1; i<=14; this.kmArray.push(i++)) {} }
  ngAfterViewInit() {
    this.mapInitializer();
    this.getPlaceAutocomplete();
  }

  goBack() { this.location.back(); }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.addresstext.nativeElement,
      { componentRestrictions: { country: 'gr' } }
    );

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.lat = place.geometry.location.lat();
      this.lng = place.geometry.location.lng();
      this.coordinates = new google.maps.LatLng(this.lat, this.lng);
      this.marker.setPosition(this.coordinates)
      this.mapOptions.center = this.coordinates;
      this.radius = null;
      this.mapInitializer()
    });
  }
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }

  drawCircle(distance: number) {
    this.chosenRadius.setMap(null)
    this.map.setZoom(
      distance > 10? 11 :
      distance > 4? 12 : 14
    )
    const circle = {
      strokeColor: "#49ccff;",
      strokeOpacity: 0.2,
      strokeWeight: 2,
      fillColor: "#49ccff;",
      fillOpacity: 0.13,
      map: this.map,
      center: this.coordinates,
      radius: distance * 1000
    };
    this.chosenRadius = new google.maps.Circle(circle)
    this.chosenRadius.bindTo('center', this.marker, 'position');
  }

  search() {

  }
}