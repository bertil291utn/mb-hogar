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
  arrowDown = true;
  arrowUp = false;
  constructor() { }
  p = [0, 1, 2, 3]

  ngOnInit() {
  }

  arrowvalue() {
    var content = 
      document.getElementById('menu-toggle2');

    console.log(content['checked']?'displaydown':'displayup');

    // let id = event.path[2].id;
    if (content['checked']) {
      this.arrowDown = true;
      this.arrowUp = false;
    }
    else {
      this.arrowDown = false;
      this.arrowUp = true;
    }

  }

}//end class
