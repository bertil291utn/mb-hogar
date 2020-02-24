import { Component, OnInit } from '@angular/core';


export interface Tile {
  id: number,
  color: string;
  cols: number;
  rows: number;
  text: any;
}

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  breakpoint: number;
  cols1: number = 1;
  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 2 : 3;
  }

  onResize(event) {
    //when resize de window this function triggers (window:resize)="function()"
    this.breakpoint = (event.target.innerWidth <= 800) ? 2 : 3;//takes number 2 of cols from grid in the other hand is always 3
    if (event.target.innerWidth <= 800) //if the windows takes les than 800px the first title (electrodomesticos) should have 2 cols
      this.tiles[0].cols = 2;
    else
      this.tiles[0].cols = 1;
  }

  tiles: Tile[] = [
    { id: 1, text: { titulo: "Electrodomésticos", description: "Para tu hogar", img: "../assets/img/electrod.png" }, cols: 1, rows: 2, color: '#E9E9E9' },
    { id: 2, text: { titulo: "Tecnología", description: "En las clases", img: "../assets/img/pc.png" }, cols: 2, rows: 1, color: '#F2FAFB' },
    { id: 3, text: { titulo: "Motos", description: "Tu viaje", img: "../assets/img/moto.png" }, cols: 1, rows: 1, color: '#0090FF' },
    { id: 4, text: { titulo: "Hogar", description: "En tu", img: "../assets/img/matress.png" }, cols: 1, rows: 1, color: '#B0CC86' },
  ];

}//end clase
