import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpProvider } from './../../providers/http/http';
import { BookServicesProvider } from '../../providers/book-services/book.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  tabBarElement: any;
  bookId: any;
  count: any;
  initialCount: number = 5;
  constructor(
    public navCtrl: NavController,
    private http: HttpProvider,
    private bookCtrl: BookServicesProvider
  ) {

  }

  ionViewDidEnter() {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.bookCtrl.getBookList().subscribe(f => {
      console.log('结果是',f)
    }, err => {
      console.log(err);
    })
  }


  openAbs(bookInfo?): void {
    // this.tabBarElement.style.display = "none"
    // this.bookId = 3;
  }

  getClose(e): void {
    setTimeout(() => {
      this.bookId = e;
      this.tabBarElement.style.display = "flex"
    }, 100);
  }
}
