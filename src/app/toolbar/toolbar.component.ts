import { Component, OnInit } from '@angular/core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  arrowDown = true; //icon display as true when page begins
  arrowUp = false;// therefore this icon is not display  when page begins
  constructor() { }
  p = [0, 1, 2, 3]

  ngOnInit() {
  }

  arrowvalue() {
    //when is click on tag label
    var categoriasNavbar =
      document.getElementById('categorias-navbar')['checked'];//get checkde value from checbox
    if (!categoriasNavbar) {//if categoriasNavbar is not checked then arrow icons
      this.arrowDown = false;
      this.arrowUp = true;
    }
    else {
      this.arrowDown = true;
      this.arrowUp = false;
    }

  }



}//end class
