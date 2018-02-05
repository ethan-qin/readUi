import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';

import { BookModalComponent } from './../../components/book-modal/book-modal';
import { BookServicesProvider } from '../../providers/book-services/book.services';
import { HttpProvider } from './../../providers/http/http';
import { HomePopComponent } from '../../components/home-pop/home-pop';
import { NativeProvider } from '../../providers/native/native';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  title: string = '我的书架';
  constructor(
    public navCtrl: NavController,
    private bookCtrl: BookServicesProvider,
    private http: HttpProvider,
    private popCtrl: PopoverController,
    private native: NativeProvider
  ) {

  }

  ionViewDidEnter() {
    // this.bookCtrl.getBookList().subscribe(f => {
    //   console.log('结果是', f)
    // }, err => {
    //   console.log(err);
    // })
    this.getUserInfo()
  }


  /**
   * 获取存储在本地的信息
   *
   * @author qin
   * @protected
   * @memberof HomePage
   */
  protected getUserInfo(): void {
    this.native.getStorage('asdas').then(f => {
      console.log('首页拿到的是', f)
    }, err => {
      console.log(err)
    })
  }


  showPop(ev): void {
    this.popCtrl.create('HomePopComponent').present({
      ev: ev
    })
  }

  pressBook(ev, id): void {
    this.openAbs(ev, id)
  }

  clickBook(ev, id): void {
    this.openAbs(ev, id)
  }

  openAbs(ev, id): void {
    if (this.native.isMobile()) {
      this.native.shake()
    }
    this.popCtrl.create(BookModalComponent, { bookId: id }, {
      cssClass: 'bookAbs',
      showBackdrop: false
    }).present({
      ev: ev,
    })
  }


  goSearch(): void {
    this.navCtrl.push('SearchPage', {}, { animate: true, animation: 'transition', duration: 400, direction: 'forward' });
  }
}
