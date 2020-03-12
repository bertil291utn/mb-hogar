import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../environments/environment';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  accessToken1: string = environment.API_KEY_MAP_BOX;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  arrowDown = true; //icon display as true when page begins
  arrowUp = false;
  categoria_1 = 'Empresa' + ' > ';
  subcatString = 'Quienes somos';
  quienesSomos = true;
  sucursales = false;
  map: mapboxgl.Map;
  popup;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }


  private initMap() {
    mapboxgl.accessToken = this.accessToken1;
    this.map = new mapboxgl.Map({
      container: 'map_canvas',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-78.1453246, 0.0402193],
      zoom: 16
    });
    this.addMarkers();
  }//end init map


  private addMarkers() {
    //get from database locations and the imagen
    let data_location = [
      { sucursal: 'Sucursal 1', direccion: 'Restaracion y 10 de agosto', fono: '0999999', coords: { lng: -78.1452268, lat: 0.0395943 } },
      { sucursal: 'Sucursal 2', direccion: 'Junin y restauracion', fono: '02222', coords: { lng: -78.145392, lat: 0.040874 } }
    ];

    data_location.forEach((obj) => {
      let imagen = document.createElement('img');
      imagen.className = 'marker';
      imagen.src = 'assets/logo_map.png';
      imagen.style.width = '40px';
      imagen.style.height = '40px';
      // add marker temp to map
      var oneMarker = new mapboxgl.Marker(imagen)
        .setLngLat(obj.coords)
        .addTo(this.map);
      //bring directions and sucursal name


      imagen.addEventListener('click', () => {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();

        this.popup = new mapboxgl.Popup({ closeOnClick: false, closeButton: false })
          .setLngLat(obj.coords)
          .setHTML('<h3 class="title">' + obj.sucursal + '</h3><p class="py-1 px-3">' + obj.direccion + '</p>' + '<p class="text-gray-600 font-medium py-1 px-3">' + obj.fono + '</p>')
          .addTo(this.map);
      });
    });
  }

  public arrowvalue() {
    //when is click on tag label
    var categoriasNavbar =
      document.getElementById('empresa-navbar')['checked'];//get checkde value from checbox
    if (!categoriasNavbar) {//if categoriasNavbar is not checked then arrow icons
      this.arrowDown = false;
      this.arrowUp = true;
    }
    else {
      this.arrowDown = true;
      this.arrowUp = false;
    }
  }

  public linkInstitucional(tipo) {
    var sucursales_list = document.getElementById('sucursales-list');
    var quienes_somos = document.getElementById('quienes-somos');
    var empresa_navbar = document.getElementById('empresa-navbar');
    var sucursales_section = document.getElementById('sucursales-section');

    const color = 'bg-gray-300';
    switch (tipo) {
      case 'quienes-somos':
        this.quienesSomos = true;//show quienes somos section
        sucursales_section.classList.add('hidden');//add hidden class to quienes somos section
        sucursales_list.classList.remove(color);
        quienes_somos.classList.add(color);
        this.arrowvalue();
        break;
      case 'sucursales':
        sucursales_section.classList.remove('hidden');//remove hidden
        sucursales_section.classList.add('block');//add block
        this.quienesSomos = false;//disable quienes somos sction
        //remove and addcolors
        quienes_somos.classList.remove(color);
        sucursales_list.classList.add(color);
        this.arrowvalue();
        break;
    }
    empresa_navbar['checked'] = false;
  }

}//end class
