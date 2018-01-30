import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { SexPopComponent } from '../../components/sex-pop/sex-pop';

/**
 * Generated class for the HotRankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hot-rank',
  templateUrl: 'hot-rank.html',
})
export class HotRankPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popCtrl: PopoverController
  ) {

  }

  ionViewDidLoad() {
  }

  /**
   * 切换性别分类
   *
   * @author qin
   * @param {any} e
   * @memberof HotRankPage
   */
  toggleSex(e): void {
    this.popCtrl.create(SexPopComponent, {}, {
      cssClass: 'hotPop',
    }).present({
      ev: e
    })
  }


/**
 * 无限滚动下拉加载新的数据
 *
 * @author qin
 * @param {any} e
 * @memberof HotRankPage
 */
doInfinite(e): void {
    setTimeout(() => {
      e.complete()
    }, 3000);
  }
}
