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
  stu: boolean;
  list: Array<bookItem> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popCtrl: PopoverController
  ) {
    this.stu = true;
  }

  ionViewDidLoad() {
    this.addArray()
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

  addArray() {
    for (let i = 0; i < 100; i++) {
      this.list.push({
        bookId: 58896 + i,
        img: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
        title: `测试书籍${i}测试书籍${i}`,
        content: `测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}测试书籍${i}`,
        searchNum: 1200,
        author: `测试作者${i}`,
        num: 150 + i,
        stu: '连载',
        tag: '二齿缘',
        rank: i + 1,
        hasRank: false,
      });
    }
  }
}
