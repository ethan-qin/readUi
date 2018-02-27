import { Component } from '@angular/core';

/**
 * Generated class for the BookClassificationSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-classification-search',
  templateUrl: 'book-classification-search.html'
})
export class BookClassificationSearchComponent {

  text: string;

  constructor() {
    console.log('Hello BookClassificationSearchComponent Component');
    this.text = 'Hello World';
  }

}
