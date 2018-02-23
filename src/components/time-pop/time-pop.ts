import { Component } from '@angular/core';

/**
 * Generated class for the TimePopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'time-pop',
  templateUrl: 'time-pop.html'
})
export class TimePopComponent {

  text: string;

  constructor() {
    console.log('Hello TimePopComponent Component');
    this.text = 'Hello World';
  }

}
