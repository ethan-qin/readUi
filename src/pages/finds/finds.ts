import { NativeProvider } from './../../providers/native/native';
import { bookList } from './../../model/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';

import { SexPopComponent } from '../../components/sex-pop/sex-pop';
/**
 * Generated class for the FindsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finds',
  templateUrl: 'finds.html',
})
export class FindsPage {
  title = '发现';
  bookList: bookList = {
    listName: '小编力荐',
    books: [
      {
        bookId: 58896,
        img: 'https://qidian.qpic.cn/qdbimg/349573/1009596368/150',
        title: `测试书籍测试书籍`,
        content: `测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍`,
        searchNum: 0,
        author: `测试作者`,
        num: 150,
        stu: '连载',
        tag: '二齿缘',
        rank: 0,
        hasRank: false,
      },
      {
        bookId: 58896,
        img: 'https://qidian.qpic.cn/qdbimg/349573/1004871398/150',
        title: `测试书籍测试书籍`,
        content: `测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍`,
        searchNum: 0,
        author: `测试作者`,
        num: 150,
        stu: '连载',
        tag: '二齿缘',
        rank: 0,
        hasRank: false,
      },
      {
        bookId: 58896,
        img: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
        title: `测试书籍测试书籍`,
        content: `测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍测试书籍`,
        searchNum: 0,
        author: `测试作者`,
        num: 150,
        stu: '连载',
        tag: '二齿缘',
        rank: 0,
        hasRank: false,
      }
    ]
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popCtrl: PopoverController,
    private native: NativeProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindsPage');
  }
  toggleSex(e): void {
    console.log(e)
    this.popCtrl.create(SexPopComponent, {}, {
      cssClass: 'sexPop'
    }).present({
      ev: e
    })
  }
  goSearch(): void {
    this.navCtrl.push("SearchPage")
    // this.native.pageGo(this.navCtrl, 'SearchPage');
    // this.navCtrl.push('SearchPage', {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
  }
  openRank(): void {
    this.navCtrl.push("RankPage")
    // this.native.pageGo(this.navCtrl, 'RankPage');
  }
  openClassification(): void {
    this.navCtrl.push("ClassificationPage")
    // this.native.pageGo(this.navCtrl, 'ClassificationPage');
  }
  openScore(): void {
    this.navCtrl.push("ScoreRankPage")
    // this.native.pageGo(this.navCtrl, 'ScoreRankPage');
  }
  openSpecial(): void {
    this.navCtrl.push("SpecialTopicPage")
    // this.native.pageGo(this.navCtrl, 'SpecialTopicPage');
  }
}
