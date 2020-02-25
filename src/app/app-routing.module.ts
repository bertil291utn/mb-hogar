import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { CategoriaToolbarComponent } from './categoria-toolbar/categoria-toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', children: [
      {
        path: '',
        component: MainHomeComponent
      },
      {
        path: 'home',
        component: MainHomeComponent
      },
      {
        path: 'categoria',
        component: CategoriaToolbarComponent
      },
    ]
  },
  //TODO aqui 

  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
