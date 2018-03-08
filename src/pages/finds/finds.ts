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
  bookList: any = {
    listName: '小编力荐',
    books: [
      {
        bookPreview: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
        title: '罪域的骨终为王',
        intro: '民风淳朴的燕南真，热情好客',
        author: '黑暗荔枝',
        bookSize: '147万字',
        bookStu: '连载',
        tag: '二次元'
      },
      {
        bookPreview: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
        title: '罪域的骨终为王',
        intro: '民风淳朴的燕南真，热情好客',
        author: '黑暗荔枝',
        bookSize: '147万字',
        bookStu: '连载',
        tag: '二次元'
      },
      {
        bookPreview: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
        title: '罪域的骨终为王',
        intro: '民风淳朴的燕南真，热情好客',
        author: '黑暗荔枝',
        bookSize: '147万字',
        bookStu: '连载',
        tag: '二次元'
      }
    ]
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popCtrl: PopoverController
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
    this.navCtrl.push('SearchPage', {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
  }
  openRank(): void {
    this.navCtrl.push('RankPage')
  }
  openClassification(): void {
    this.navCtrl.push('ClassificationPage')
  }
  openScore(): void {
    this.navCtrl.push('ScoreRankPage')
  }
  openSpecial(): void {
    this.navCtrl.push('SpecialTopicPage')
  }
}
