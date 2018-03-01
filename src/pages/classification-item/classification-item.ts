import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, Events } from 'ionic-angular';
import { BaseUI } from '../../common/baseUI';
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
export class ClassificationItemPage extends BaseUI {
  @ViewChild('pageContainer') pageContainer: Slides;
  @ViewChild(Content) content: Content;
  isFrist: boolean = true;         //是否初次加载全部书籍
  searchCheckBox: Array<any> = [];  //书籍分类多选
  searchRadio: Array<any> = [];     //排序单选
  searchFiltrate: Array<any> = [];  //过滤多选
  where: string = 'recommend';      //当前所处的位置 默认推荐页
  stu: boolean;
  search: boolean = false;          //是否显示搜索栏
  searchContent: Array<any> = [];   //当前搜索条件
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
    public navParams: NavParams,
    private events: Events,
    private toastCtrl: ToastController,
  ) {
    super();
    this.stu = true;
    this.searchCheckBox = [
      {
        code: 0,
        idCode: 1,
        class: '上古蛮荒',
        checked: false
      },
      {
        code: 0,
        idCode: 2,
        class: '热血江湖',
        checked: false
      },
      {
        code: 0,
        idCode: 3,
        class: '古代情缘',
        checked: false
      },
      {
        code: 0,
        idCode: 4,
        class: '宫闱宅斗',
        checked: false
      },
      {
        code: 0,
        idCode: 5,
        class: '经商种田',
        checked: false
      },
      {
        code: 0,
        idCode: 6,
        class: '古典架空',
        checked: false
      },
      {
        code: 0,
        idCode: 7,
        class: '女尊王朝',
        checked: false
      }
    ]
    this.searchRadio = [
      {
        code: 1,
        idCode: 1,
        class: '人气排序',
        checked: true
      },
      {
        code: 1,
        idCode: 2,
        class: '更新时间排序',
        checked: false
      },
      {
        code: 1,
        idCode: 3,
        class: '总推荐排序',
        checked: false
      },
      {
        code: 1,
        idCode: 4,
        class: '总收藏排序',
        checked: false
      },
      {
        code: 1,
        idCode: 5,
        class: '总月票排序',
        checked: false
      },
      {
        code: 1,
        idCode: 6,
        class: '会员周点击排序',
        checked: false
      },
      {
        code: 1,
        idCode: 7,
        class: '会员月点击排序',
        checked: false
      },
      {
        code: 1,
        idCode: 8,
        class: '会员总点击排序',
        checked: false
      },
      {
        code: 1,
        idCode: 9,
        class: '字数排序',
        checked: false
      }
    ]
    this.searchFiltrate = [
      {
        code: 2,
        title: '字数',
        list: [
          {
            code: 2,
            idCode: 0,
            class: '不限',
            checked: true
          },
          {
            code: 2,
            idCode: 1,
            class: '30万以下',
            checked: false
          },
          {
            code: 2,
            idCode: 2,
            class: '30万-50万',
            checked: false
          },
          {
            code: 2,
            idCode: 3,
            class: '50万-100万',
            checked: false
          },
          {
            code: 2,
            idCode: 4,
            class: '100万-200万',
            checked: false
          },
          {
            code: 2,
            idCode: 5,
            class: '200万以上',
            checked: false
          }
        ]
      },
      {
        code: 3,
        title: '进度',
        list: [
          {
            code: 3,
            idCode: 0,
            class: '全部',
            checked: true
          },
          {
            code: 3,
            idCode: 1,
            class: '连载',
            checked: false
          },
          {
            code: 3,
            idCode: 2,
            class: '完本',
            checked: false
          }
        ]
      },
      {
        code: 4,
        title: '状态',
        list: [
          {
            code: 4,
            idCode: 0,
            class: '不限',
            checked: true
          },
          {
            code: 4,
            idCode: 1,
            class: '只看免费',
            checked: false
          },
          {
            code: 4,
            idCode: 2,
            class: '只看VIP',
            checked: false
          },
          {
            code: 4,
            idCode: 3,
            class: '只看A级签约',
            checked: false
          }
        ]
      },
    ];
    this.changSearch();
  }

  ionViewDidEnter(){
   this.stu=false;
  }
  ionViewDidLeave(){
    this.events.unsubscribe('search:change')
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
    if (this.isFrist) {
      this.filtrateBook()
    }
    this.content.resize()
  }

  private changSearch(): void {
    this.events.subscribe('search:change', (f) => {
      if (f.key && f.searchList) {
        this[f.key] = f.searchList;
      }
      this.filtrateBook()
    })
  }

  private filtrateBook(): void {
    this.isFrist = false;
    this.searchContent = [];
    this.searchCheckBox.forEach(Element => {
      if (Element.checked) {
        if (this.searchContent.indexOf(Element) == -1) {
          this.searchContent.push(Element)
        }
      }
    })
    this.searchRadio.forEach(Element => {
      if (Element.checked) {
        if (this.searchContent.indexOf(Element) == -1) {
          this.searchContent.push(Element)
        }
      }
    })
    this.searchFiltrate.forEach(Element => {
      Element.list.forEach(element => {
        if (element.checked) {
          if (this.searchContent.indexOf(element) == -1) {
            this.searchContent.push(element)
          }
        }
      });
    })
    super.showToast(this.toastCtrl, 'bottom', JSON.stringify(this.searchContent)).present()
  }
}
