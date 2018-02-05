import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'book-modal',
  templateUrl: 'book-modal.component.html'
})

export class BookModalComponent {
  @Output() event = new EventEmitter<any>();
  bookId: any;
  isShow: boolean = false;
  constructor(
    private navCtrl: NavController,
    private viewCtrl: ViewController,
    private popCtrl: PopoverController,
    private navParams: NavParams
  ) {
    this.bookId = this.navParams.get('bookId');
  }


  ionViewWillEnter() {
    setTimeout(() => {
      this.isShow = true;
    }, 80);
  }
  ionViewWillUnload(){
    this.isShow = false;
    // this.navCtrl.popAll()
    // this.close()
  }

  private close(): void {
    this.isShow = false;
    this.viewCtrl.dismiss();
  }
  private openBook(id) {
    this.navCtrl.push('BookAbstractPage', { bookId: this.bookId });
  }
}

