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
  items: Array<any> = [];
  scrollHeight: number;
  hasMore: boolean = false;
  isLoading: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popCtrl: PopoverController
  ) {
    for (let i = 1; i < 21; i++) {
      this.items.push({ rank: i })
    }
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
  doInfinite(infiniteScroll) {
    console.log('开始加载');

    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        this.items.push({ rank: this.items.length });
      }
      infiniteScroll.complete();
    }, 500);
  }

  a(e): void {
    console.log(e)
  }
  addScrollEventListener(): void {
    this.scroll._scrollContent.nativeElement.onscroll = (event) => {
      let top = this.spinner.nativeElement.getBoundingClientRect().top;
      if (top <= this.scrollHeight && !this.isLoading) {
        this.isLoading = true;
        this.hasMore = true;
        console.log('加载数据中...');
      }
    }
  }
}
