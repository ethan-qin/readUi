import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the BookListRankComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-list-rank',
  templateUrl: 'book-list-rank.html'
})
export class BookListRankComponent {
  @Input() hasRank: boolean;
  @Input() hasSearch: boolean;
  text: string;
  bookList: Array<any> = [];
  constructor(
    private navCtrl: NavController
  ) {
    this.getRankList();
  }

  getRankList(e?): void {
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        this.bookList.push({ rank: this.bookList.length + 1 })
      }
      if (e) {
        e.complete()
      }
    }, 500);


  }
  getMoreRankList(e): void {
    this.getRankList(e);
  }
  openBook(data) {
    this.navCtrl.push('BookAbstractPage', { bookId: data });
  }
}
