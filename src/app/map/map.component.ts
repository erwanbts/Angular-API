import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 46.55;
  lng = 2.2;

  constructor() {}

  @Input() users: [];

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.users);
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGVmbGVzcyIsImEiOiJja2huZzZsOXYwcWRqMnZybjA5a3ZlOXNrIn0.Ba2oK5XMWeLgOllIYN-fFA';
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 5,
        center: [this.lng, this.lat]
    })
    this.users.forEach(user => {
      new mapboxgl.Marker()
        .setLngLat([user.location.coordinates.longitude, user.location.coordinates.latitude])
        .addTo(this.map);
    });
  };
}
