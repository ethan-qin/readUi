import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'book-modal',
  templateUrl: 'book-modal.component.html'
})

export class BookModalComponent implements OnInit {
  @Output() event = new EventEmitter<any>();
  @Input() bookId: any;
  isShow: boolean = false;
  constructor(
    private navCtrl: NavController
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isShow = true;
    }, 100);
    console.log(this.bookId)
  }

  private close(): void {
    this.isShow = false;
    this.event.emit("")
  }

  private openBook(id) {
    id = 3;
    this.navCtrl.push('BookAbstractPage');
  }
}

