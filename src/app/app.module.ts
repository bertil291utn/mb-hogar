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
import { SubtoolbarComponent } from './subtoolbar/subtoolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CarouselComponent,
    IntroComponent,
    CategoriasComponent,
    OfertasComponent,
    FooterComponent,
    SubtoolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
