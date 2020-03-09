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


  constructor() { }

  ngOnInit() {
    this.initMap();
  }


  initMap() {
    mapboxgl.accessToken = this.accessToken1;
    const map = new mapboxgl.Map({
      container: 'map_canvas',
      style: 'mapbox://styles/mapbox/streets-v11'
    });

  }//end init map

  arrowvalue() {
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

  linkInstitucional(tipo) {
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
        break;
      case 'sucursales':
        sucursales_section.classList.remove('hidden');//remove hidden
        sucursales_section.classList.add('block');//add block
        this.quienesSomos = false;//disable quienes somos sction
        //remove and addcolors
        quienes_somos.classList.remove(color);
        sucursales_list.classList.add(color);
        break;
    }
    empresa_navbar['checked'] = false;
  }

}//end class
