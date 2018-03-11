import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-more',
  templateUrl: 'list-more.html',
})
export class ListMorePage {
  stu: boolean = false;
  title: string;
  list: Array<bookItem> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListMorePage');
    this.title = this.navParams.get('title');
    console.log(this.title)
    this.addArray()
  }
  addArray() {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        bookId: 58896+i,
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
