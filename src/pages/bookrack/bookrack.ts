import { IonicPage } from 'ionic-angular';
import { HomePopComponent } from './../../components/home-pop/home-pop';
import { Component, ViewChild } from '@angular/core';
import { NavController, Events, Content } from 'ionic-angular';

import { BookModalComponent } from './../../components/book-modal/book-modal';
import { NativeProvider } from '../../providers/native/native';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
/**
 * Generated class for the BookrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookrack',
  templateUrl: 'bookrack.html',
})
export class BookrackPage {
  @ViewChild(Content) content: Content;
  title: string = '我的书架';
  bookList = [
    {
      id: 1001,
      preview: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
      bookName: '幽灵骑士2',
      author: '崖画时',
      plat: '第一千七百章',
      end: '第二十四章',
      endTitle: '妖怪啊！',
    },
    {
      id: 1001,
      preview: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
      bookName: '幽灵骑士2',
      author: '崖画时',
      plat: '第一千七百章',
      end: '第二十四章',
      endTitle: '妖怪啊2！',
    }
  ]
  constructor(
    public navCtrl: NavController,
    private events: Events,
    private native: NativeProvider,
    private popCtrl: PopoverController,
  ) {
    this.openbook()
  }

  ionViewDidEnter() {
    this.getUserInfo();
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

  /**
   * 长按打开书籍弹窗
   *
   * @author qin
   * @protected
   * @param {any} ev
   * @param {any} bookItem
   * @memberof HomePage
   */
  protected pressBook(ev, bookItem): void {
    this.openAbs(ev, bookItem)
  }

  /**
   * 单击打开书籍弹窗
   *
   * @author qin
   * @protected
   * @param {any} ev
   * @param {any} bookItem
   * @memberof HomePage
   */
  protected clickBook(ev, bookItem): void {
    this.openAbs(ev, bookItem)
  }

  /**
   * 打开书籍弹窗
   *
   * @author qin
   * @protected
   * @param {any} ev
   * @param {any} bookItem
   * @memberof HomePage
   */
  protected openAbs(ev, bookItem): void {
    if (this.native.isMobile()) {
      this.native.shake()
    }
    this.popCtrl.create(BookModalComponent, { bookItem: bookItem }, {
      cssClass: 'bookAbs',
      showBackdrop: false
    }).present({
      ev: ev,
      animate: false
    })
  }

  /**
   * 打开搜索页面
   *
   * @author qin
   * @protected
   * @memberof HomePage
   */
  protected goSearch(): void {
    this.navCtrl.push('SearchPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  /**
   * 打开首页设置
   *
   * @author qin
   * @protected
   * @param {any} ev
   * @memberof HomePage
   */
  protected showPop(ev): void {
    this.popCtrl.create(HomePopComponent).present({
      ev: ev,
    })
  }

  private openbook() {
    this.events.subscribe('openThisBook', (data) => {
      this.navCtrl.push('BookAbstractPage', { bookId: data });
    })
  }

}
