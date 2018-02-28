import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';

/**
 * Generated class for the ClassificationItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classification-item',
  templateUrl: 'classification-item.html',
})
export class ClassificationItemPage {
  @ViewChild('pageContainer') pageContainer: Slides;
  @ViewChild(Content) content: Content;
  where: string = 'recommend';
  stu: boolean;
  search: boolean = false;;
  bookList: any = {
    listName: '本周强推',
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
        title: '罪域的',
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
    public navParams: NavParams
  ) {
    this.stu = false;
  }

  ionViewDidLoad() {
    console.log(this.pageContainer);
  }
  toggle(): void {
    if (this.pageContainer.isBeginning()) {
      this.goToRecommend()
    } else {
      this.goToAll()
    }
  }


  goToRecommend(): void {
    this.pageContainer.slidePrev()
    this.pageContainer.lockSwipeToNext(false);
    this.pageContainer.lockSwipeToPrev(true);
    this.where = 'recommend'
    this.search = false;
    this.content.resize();
  }
  goToAll(): void {
    this.pageContainer.slideNext()
    this.pageContainer.lockSwipeToNext(true);
    this.pageContainer.lockSwipeToPrev(false);
    this.where = 'all'
    this.search = true;
    this.content.resize()
  }
}
