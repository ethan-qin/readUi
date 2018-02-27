import { Component, Input } from '@angular/core';

/**
 * Generated class for the BookListVerticalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-list-vertical',
  templateUrl: 'book-list-vertical.html'
})
export class BookListVerticalComponent {
  @Input() bookList: any;
  text: string;

  constructor() {
    console.log('Hello BookListVerticalComponent Component');
    this.text = 'Hello World';
    console.log('这是的',this.bookList)
  }

}
