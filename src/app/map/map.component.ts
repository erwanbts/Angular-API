import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  constructor() {
    navigator.geolocation.getCurrentPosition(
      pos => { this.lat = pos.latitude, this.lng = pos.longitude} ,
      error => console.warn(error));
  }
  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVmbGVzcyIsImEiOiJja2huZzZsOXYwcWRqMnZybjA5a3ZlOXNrIn0.Ba2oK5XMWeLgOllIYN-fFA';
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
  }
}
