import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookServicesProvider } from '../../providers/book-services/book.services';
import { HttpProvider } from './../../providers/http/http';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { HomePopComponent } from '../../components/home-pop/home-pop';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  bookId: any;
  tabBarElement: any;
  title: string = '我的书架';
  constructor(
    public navCtrl: NavController,
    private bookCtrl: BookServicesProvider,
    private http: HttpProvider,
    private popCtrl: PopoverController
  ) {

  }

  ionViewDidEnter() {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.bookCtrl.getBookList().subscribe(f => {
      console.log('结果是', f)
    }, err => {
      console.log(err);
    })
  }

  showPop(ev): void {
    this.popCtrl.create(HomePopComponent).present({
      ev: ev
    })
  }

  openAbs(bookInfo?): void {
    this.tabBarElement.style.display = "none"
    this.bookId = 3;
  }

  getClose(e): void {
    setTimeout(() => {
      this.bookId = e;
      this.tabBarElement.style.display = "flex"
    }, 100);
  }
}
