import { NavController } from 'ionic-angular';
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

  constructor( 
    private navCtrl: NavController
  ) {
  }
  openBook(data) {
    this.navCtrl.push('BookAbstractPage', { bookId: data });
  }
  openMore(listId, title) {
    this.navCtrl.push('ListMorePage', { listId: listId, title: title });
  }
}
