import { scoreList, bookList } from './../../model/model';
import { Component, ViewChild, ViewChildren, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ScoreRankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score-rank',
  templateUrl: 'score-rank.html',
})
export class ScoreRankPage {
  @ViewChild(Content) content: Content
  @ViewChild('title') title: ElementRef;
  @ViewChild('header') header: ElementRef;
  @ViewChildren('list') list: ElementRef;

  bottom: number;
  top: number;
  isScroll: Boolean = false;
  isTouch: Boolean = false;
  bookLists: Array<scoreList> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public zone: NgZone,
  ) {
    for (let i = 0; i < 10; i++) {
      let item = [];
      var timeStimp = 24 * 60 * 60 * 1000;
      var nowTimp = new Date().getTime();
      for (let j = 0; j < 20; j++) {
        item.push(
          {
            comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
            bookId: Math.ceil(Math.random() * 1000000),
            bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
            bookTitle: '家酿',
            bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
            bookAuthor: (Math.random() * 100).toString(36),
            bookStu: '连载',
            bookTag: '古代言情',
            bookNum: i + j + 1,
            isCollect: false,
          },
        )

      }
      this.bookLists.push({
        startTime: new Date(nowTimp - (i+1) * timeStimp * 7),
        endTime: new Date(nowTimp - i * timeStimp),
        bookList: item
      })


    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreRankPage');
  }
  ionViewDidEnter() {
    this.top = this.header.nativeElement.clientHeight;
    this.bottom = this.title.nativeElement.clientHeight + this.header.nativeElement.clientHeight;
  }

  srollIng(): void {
    this.list['_results'].forEach((element) => {
      let elementTop = element.nativeElement.getBoundingClientRect().top;
      if (elementTop < this.bottom && elementTop > this.top) {
        this.title.nativeElement.style.transform = 'translateY(' + (elementTop - this.bottom) + 'px)';
      } else {
        if (elementTop <= this.top) {
          this.title.nativeElement.style.transform = "translateY(0px)";
          this.title.nativeElement.lastElementChild.innerHTML = element.nativeElement.children[0].innerText;
        }
      }
    });

  }
  srollSrart(): void {
    this.zone.run(() => {
      this.isScroll = true;
    })
  }
  srollEnd(): void {
    this.zone.run(() => {
      this.isScroll = false;
    })
  }
  openBook(bookId: number): void {
    console.log(bookId)
  }
  collectBook(bookId: number) {
    console.log(bookId)
  }

}
