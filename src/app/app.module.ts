import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IntroComponent } from './intro/intro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriasComponent } from './categorias/categorias.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from './angular-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainHomeComponent } from './main-home/main-home.component';
import { CategoriaToolbarComponent } from './categoria-toolbar/categoria-toolbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CarouselComponent,
    IntroComponent,
    CategoriasComponent,
    OfertasComponent,
    FooterComponent,
    MainHomeComponent,
    CategoriaToolbarComponent,
    PageNotFoundComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularMaterialModule,
    NoopAnimationsModule,
    MatCarouselModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
