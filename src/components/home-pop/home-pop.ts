import { Component } from '@angular/core';

/**
 * Generated class for the HomePopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-pop',
  templateUrl: 'home-pop.html'
})
export class HomePopComponent {

  text: string;

  constructor() {
    console.log('Hello HomePopComponent Component');
    this.text = 'Hello World';
  }

}
