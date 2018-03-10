import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SexPopComponent } from '../../components/sex-pop/sex-pop';
import { TimePopComponent } from '../../components/time-pop/time-pop';

/**
 * Generated class for the RankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rank',
  templateUrl: 'rank.html',
})
export class RankPage {
  @ViewChild('scroll') scroll: any;
  @ViewChild('spinner') spinner: any;
  list: Array<bookItem> = [];
  scrollHeight: number;
  hasMore: boolean = true;
  isLoading: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popCtrl: PopoverController
  ) {
    this.addArray()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankPage');
    this.addScrollEventListener()
    this.getScrollHeight()
  }
  toggleClass(ev): void {
    this.popCtrl.create(SexPopComponent, {}, {
      cssClass: 'RankPopClass'
    }).present({
      ev: ev,
      animate: false
    })
  }

  getScrollHeight(): void {
    this.scrollHeight = this.scroll._scrollContent.nativeElement.clientHeight
  }
  toggleTime(ev): void {
    this.popCtrl.create(TimePopComponent, {}, {
      cssClass: 'RankPopTime'
    }).present({
      ev: ev,
      animate: false
    })
  }
  addScrollEventListener(): void {
    this.scroll._scrollContent.nativeElement.onscroll = (event) => {
      let top = this.spinner.nativeElement.getBoundingClientRect().top;
      if (top <= this.scrollHeight && !this.isLoading && this.hasMore) {
        console.log(this.hasMore)
        this.isLoading = true;
        setTimeout(() => {
          this.addArray()
        }, 1500);
        console.log('加载数据中...');
      }
    }
  }

  openBook(data): void {
    this.navCtrl.push('BookAbstractPage', { bookId: data });
  }

  addArray() {
    this.isLoading = true;
    for (let i = 0; i < 10; i++) {
      this.list.push({
        bookId: 58896+i,
        img: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
        title: `测试书籍${this.list.length}测试书籍${this.list.length}`,
        content: `测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}测试书籍${this.list.length}`,
        searchNum: 1200 + this.list.length,
        author: `测试作者${this.list.length}`,
        num: 150 + this.list.length,
        stu: '连载',
        tag: '二齿缘',
        rank: this.list.length + 1,
        hasRank: true,
      });
      if (this.list.length >= 100) {
        this.hasMore = false;
        return false;
      }
    }
    this.isLoading = false;
  }
}
