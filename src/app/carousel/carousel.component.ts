import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slides1 = ['https://i5.walmartimages.com/dfw/4ff9c6c9-4e59/k2-_2d80103d-aac1-4162-b240-1a0f4a67f819.v1.jpg',
    'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1920/1080/75/dam/disneyland/attractions/disney-california-adventure/jessies-critter-carousel/jessies-critter-carousel-16x9_1.jpg', 'https://i0.wp.com/divinotes.com/wp-content/uploads/2017/08/Free-WordPress-Logo-Carousel-hero.jpg'];


}//end class
