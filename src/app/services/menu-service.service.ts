import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: 'home', path: './home', children: [] },
      {
        name: 'Electrodomesticos',
        path: './c/electrodomesticos',
        children: [
          {
            name: 'refrigeradora',
            path: './refrigeradora',
            children: [
              {
                name: 'THE FELLOWSHIP OF THE RING Details',
                path: './book1'
              },
              {
                name: 'THE RETURN OF THE KING',
                path: './book2'
              },
              {
                name: 'Harry Potter and the Philosopher\'s Stone',
                path: './book3'
              },
              {
                name: 'Harry Potter and the Chamber of Secrets',
                path: './book4'
              }
            ]
          }
        ]
      },
    ];

    return menu;
  }
}//end class
