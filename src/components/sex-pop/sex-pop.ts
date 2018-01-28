import { Component } from '@angular/core';

/**
 * Generated class for the SexPopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sex-pop',
  templateUrl: 'sex-pop.html'
})
export class SexPopComponent {

  text: string;

  constructor() {
    console.log('Hello SexPopComponent Component');
    this.text = 'Hello World';
  }

}
