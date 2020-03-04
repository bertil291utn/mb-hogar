import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  list = [
    {
      id: 1,
      codigo: 'p-01-refrigeradora',
      producto: 'Refrigeradora'
    },
    {
      id: 2,
      codigo: 'p-02-congelador',
      producto: 'Congelador'
    },
    {
      id: 3,
      codigo: 'p-03-celular',
      producto: 'Celular'
    },
    {
      id: 4,
      codigo: 'p-04-impresora',
      producto: 'Impresora'
    },
    {
      id: 5,
      codigo: 'p-05-motocicleta',
      producto: 'Motocicleta'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  title = 'angularowlslider';
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}//end class
