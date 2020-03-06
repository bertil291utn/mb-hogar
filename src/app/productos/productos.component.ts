import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto;
  valToogle = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.producto = params.name_prod
      //buscar en BD a cual pertenece ese codigo y deplegar el elemento
    });
  }

  onChangeSlideToggle(event) {
    console.log('evento de toogle: ', event);
  }

  title = 'angularowlslider';
  customOptions: any = {

    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    }
  }

}//end main class 
