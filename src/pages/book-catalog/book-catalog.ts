import { Component, ViewChild, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookCatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-catalog',
  templateUrl: 'book-catalog.html',
})
export class BookCatalogPage {
  @ViewChild('bookHeade') bookHeade: any;
  @ViewChild('scroll') scroll: any;
  @ViewChildren('list') list: any;
  cacheArr: Array<any> = [];
  date: Date = new Date();
  catalogArr: Array<catalog> = [
    {
      headerName: '第一卷',
      catalog: [
        {
          catalogId: 1,
          title: '第一章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 2,
          title: '第二章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第三章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第四章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第五章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第六章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第七章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第八章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第九章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第十章',
          isVip: false,
          bookmark: false,
          time: this.date
        }
      ]
    },
    {
      headerName: '第二卷',
      catalog: [
        {
          catalogId: 1,
          title: '第一章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 2,
          title: '第二章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第三章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第四章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第五章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第六章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第七章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第八章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第九章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第十章',
          isVip: false,
          bookmark: false,
          time: this.date
        }
      ]
    },
    {
      headerName: '第三卷',
      catalog: [
        {
          catalogId: 1,
          title: '第一章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 2,
          title: '第二章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第三章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第四章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第五章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第六章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第七章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第八章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第九章',
          isVip: false,
          bookmark: false,
          time: this.date
        },
        {
          catalogId: 3,
          title: '第十章',
          isVip: false,
          bookmark: false,
          time: this.date
        }
      ]
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }
  ionViewDidEnter() {
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
