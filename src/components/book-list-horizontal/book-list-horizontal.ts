import { Component, Input  } from '@angular/core';

/**
 * Generated class for the BookListHorizontalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-list-horizontal',
  templateUrl: 'book-list-horizontal.html'
})
export class BookListHorizontalComponent {
  @Input() bookList:any;
  constructor() {
    console.log('Hello BookListHorizontalComponent Component');
  }
}
