import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit,AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  @ViewChild('addresstext', {static: false}) addresstext: any;

  autocompleteInput: string;
  queryWait: boolean;

  map: google.maps.Map;
  lat = 40.730610;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
    streetViewControl: false,
    zoomControl: false,
    fullscreenControl: false,
    mapTypeControl: false
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  constructor(private location: Location) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.mapInitializer();
    this.getPlaceAutocomplete();
   }

   private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
        {componentRestrictions: { country: 'gr' }});

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const place = autocomplete.getPlace();
        this.lat = place.geometry.location.lat();
        this.lng= place.geometry.location.lng();
        this.coordinates = new google.maps.LatLng(this.lat, this.lng);
        this.marker = new google.maps.Marker({
          position: this.coordinates,
          map: this.map,
        });
        this.mapOptions.center = this.coordinates
        this.mapInitializer()
    });
}

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
   }

  goBack(){ this.location.back(); }
}
