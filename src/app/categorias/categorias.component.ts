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

  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    { id: 1, text: { titulo: "Electrodomésticos", description: "Para tu hogar", img: "../assets/img/electrod.png" }, cols: 1, rows: 2, color: '#E9E9E9' },
    { id: 2, text: { titulo: "Tecnología", description: "En las clases", img: "../assets/img/pc.png" }, cols: 2, rows: 1, color: '#F2FAFB' },
    { id: 3, text: { titulo: "Motos", description: "Tu viaje", img: "../assets/img/moto.png" }, cols: 1, rows: 1, color: '#0090FF' },
    { id: 4, text: { titulo: "Hogar", description: "En tu", img: "../assets/img/matress.png" }, cols: 1, rows: 1, color: '#B0CC86' },
  ];

}//end clase
