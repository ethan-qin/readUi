import { Component } from '@angular/core';
import { NavParams, Events } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'book-modal',
  templateUrl: 'book-modal.component.html'
})

export class BookModalComponent {
  book: any;
  bg: any;
  isShow: boolean = false;
  constructor(
    private events: Events,
    private viewCtrl: ViewController,
    private navParams: NavParams
  ) {
    this.book = this.navParams.get('bookItem');
  }


  ionViewWillEnter() {
    this.bg = `url('assets/imgs/bookbg1.jpg')`;
    setTimeout(() => {
      this.isShow = true;
    }, 80);
  }
  ionViewWillUnload() {
    this.isShow = false;
  }

  private close(): void {
    this.isShow = false;
    this.viewCtrl.dismiss({}, '', {
      animate: false
    });
  }
  private openBook(id) {
    this.sendBookId(this.book.id)
    this.close()
  }
  private sendBookId(bookId): void {
    this.events.publish('openThisBook', bookId)
  }
}

