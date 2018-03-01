import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

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
  @Input() bookList: any;
  constructor(
    private navCtrl: NavController
  ) {

  }
  ionViewDidEnter() {
    setTimeout(() => {
      console.log(this.bookList)
    }, 3000);
  }
  openBook(data) {
    this.navCtrl.push('BookAbstractPage', { bookId: data });
  }
}
