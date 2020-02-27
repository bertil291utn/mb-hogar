import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-categoria-toolbar',
  templateUrl: './categoria-toolbar.component.html',
  styleUrls: ['./categoria-toolbar.component.css']
})
export class CategoriaToolbarComponent implements OnInit {
  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];
  categoria;
  constructor(private route: ActivatedRoute, private _router: Router,/* private menuService: MenuService */) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => this.categoria = this.getCategoria(params.id));
  }

  getCategoria(id) {
    switch (id) {
      case 'electrodomesticos':
        return 'Electrodomesticos'
      case 'tecnologia':
        return 'Tecnologia'
      case 'electromenores':
        return 'Electromenores'
      case 'hogar':
        return 'Hogar'
      case 'motocicletas':
        return 'Motocicletas'
      case 'ferreteria':
        return 'Ferreteria'
      default:
        return 'Sin categoria'

    }
  }//end get categoria

}//end class
