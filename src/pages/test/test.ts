import { scoreList, bookList } from './../../model/model';
import { Component, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  @ViewChild(Content) content: Content
  @ViewChild('bookHeade') bookHeade: ElementRef;
  @ViewChild('scroll') scroll: any;
  @ViewChildren('list') list: ElementRef;
  bookLists: Array<scoreList> = [
    {
      startTime: 20155,
      endTime: 535435,
      bookList: [
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
      ]
    },
    {
      startTime: 20155,
      endTime: 535435,
      bookList: [
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
      ]
    },
    {
      startTime: 20155,
      endTime: 535435,
      bookList: [
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
      ]
    },
    {
      startTime: 20155,
      endTime: 535435,
      bookList: [
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
      ]
    },
    {
      startTime: 20155,
      endTime: 535435,
      bookList: [
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
        {
          comment: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookId: 15645,
          bookCover: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
          bookTitle: '家酿',
          bookIntro: '柳福儿以为这世界上除开生孩子没办法一个人来，其他的都成。所以在某人找来之时，他很淡定的的回答：“不认识，赶走。”有时候媳妇太岁月静好页不是件好事',
          bookAuthor: '绯我年华',
          bookStu: '连载',
          bookTag: '古代言情',
          bookNum: 6,
          isCollect: false,
        },
      ]
    },
  ]
  cacheArr: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreRankPage');
  }
  ionViewDidEnter() {
    // this.setHeader()
  }
  srollTest(): void {
    let top = this.list['_results'][0].nativeElement.getBoundingClientRect().top;
    console.log(top)
  }
  openBook(bookId: number): void {
    console.log(bookId)
  }
  collectBook(bookId: number) {
    console.log(bookId)
  }

  /**
   * 设置时间条替换效果，在异步数据加载完成后调用
   *
   * @author qin
   * @protected
   * @memberof ScoreRankPage
   */
  protected setHeader(): any {
    if (!this.list['_results'][0]) {
      return false;
    }
    let top = this.list['_results'][0].nativeElement.getBoundingClientRect().top;
    let translateY = this.bookHeade.nativeElement.offsetHeight;
    this.scroll._scrollContent.nativeElement.onscroll = () => {
      this.cacheArr = [];
      if (this.list) {
        this.list['_results'].forEach(element => {
          this.cacheArr.push({ 'obj': element, 'top': element.nativeElement.getBoundingClientRect().top - top });
        });
      }
      this.cacheArr.forEach((element, index) => {
        if (element.top > 0 && element.top <= translateY) {
          this.bookHeade.nativeElement.style.transform = "translateY(" + (element.top) + "px)"
        } else {
          if (this.cacheArr[index].top <= 0) {
            this.bookHeade.nativeElement.style.transform = "translateY(" + translateY + "px)";
            this.bookHeade.nativeElement.innerHTML = this.cacheArr[index].obj.nativeElement.children[0].innerText;
          }
        }
      })
    }
  }

}
