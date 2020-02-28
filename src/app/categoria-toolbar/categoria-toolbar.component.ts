import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';

export interface Card {
  title: string;
  subtitle: string;
  text: string;
}

const DATA: Card[] = [
  {
    title: 'Shiba Inu 1',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 2',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 3',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 4',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 5',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 6',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 7',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 8',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 9',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 10',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 11',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },
  {
    title: 'Shiba Inu 12',
    subtitle: 'Dog Breed',
    text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
  },

];


@Component({
  selector: 'app-categoria-toolbar',
  templateUrl: './categoria-toolbar.component.html',
  styleUrls: ['./categoria-toolbar.component.css']
})
export class CategoriaToolbarComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);
  name: string;
  menu: Array<any> = [];
  breadcrumbList: Array<any> = [];
  categoria;
  subcat = '';


  constructor(private route: ActivatedRoute, private _router: Router, private changeDetectorRef: ChangeDetectorRef
    /* private menuService: MenuService */) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => this.categoria = this.getCategoria(params.id));//getting the categoria passing argument as string

    /*paginator*/
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    /*paginator*/
  }


  ngOnDestroy() {
    /*paginator*/
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
    /*paginator*/
  }

  categoriaAction(categoria) {
    //mandar a buscar en bd la categoria y devolver el string el nombre y poner en subcategoria
    this.subcat = categoria;
    console.log('traer todas las categorias de ', categoria, ' y volver a pintar');

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
