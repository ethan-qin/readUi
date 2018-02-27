import { Component } from '@angular/core';

/**
 * Generated class for the BookListSlidesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-list-slides',
  templateUrl: 'book-list-slides.html'
})
export class BookListSlidesComponent {

  text: string;

  constructor() {
    console.log('Hello BookListSlidesComponent Component');
    this.text = 'Hello World';
  }

}
