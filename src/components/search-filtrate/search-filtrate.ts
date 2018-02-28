import { Component } from '@angular/core';

/**
 * Generated class for the SearchFiltrateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-filtrate',
  templateUrl: 'search-filtrate.html'
})
export class SearchFiltrateComponent {

  text: string;

  constructor() {
    console.log('Hello SearchFiltrateComponent Component');
    this.text = 'Hello World';
  }

}
