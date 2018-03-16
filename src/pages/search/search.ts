import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { autoComplete } from './../../model/model';
import { BaseUI } from '../../common/baseUI';
import { NativeProvider } from './../../providers/native/native';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage extends BaseUI {

  @ViewChild('search') search: Slides;

  mockAuto = [
    { id: 1, icon: '', type: 'bookList', des: '书单', preview: { face: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150', back: 'https://qidian.qpic.cn/qdbimg/349573/1010092001/150' }, content: '一本书，一壶酒，一曲长歌，一剑天涯,一本书，一壶酒，一曲长歌，一剑天涯' },  //书单格式
    { id: 2, icon: '', type: 'author', des: '作家', preview: {}, content: '一剑霜' },  //作者格式
    { id: 3, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑飞仙' },  //书籍格式
    { id: 4, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑倾天' },
    { id: 5, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑凌尘' },
    { id: 6, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑通天传' },
    { id: 7, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑风尊' },
    { id: 8, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑天途' },
    { id: 9, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑惊雷' },
    { id: 10, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑逍遥行' },
    { id: 11, icon: '', type: 'book', des: '书籍', preview: {}, content: '一剑娇仙' },
  ]
  // isBack: boolean = true;
  searchString: string;                               //用户输入的字段
  hasKey: boolean = false;                            //是否处于autoComple页面
  aotoCompleArr: Array<autoComplete> = [];            //自动完成提示数据组
  target: string = "book";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private native: NativeProvider
  ) {
    super()
  }


  ionViewWillLeave() {
    this.search.lockSwipes(true);
    // if (this.isBack) {
    //   this.native.nativeTransition('slide:back')
    // }
  }

  ionViewWillUnload(){
    console.log('我明确被销毁了')
  }
  goRank() {
    this.native.pageGo(this.navCtrl, 'HotRankPage');
  }


  /**
   * 是否展示描述 书籍不展示
   *
   * @author qin
   * @param {autoComplete} item
   * @returns {boolean}
   * @memberof SearchPage
   */
  hasDes(item: autoComplete): boolean {
    if (item.type === 'book') {
      return false
    }
    return true;
  }

  /**
   * 类型是否是book
   *
   * @author qin
   * @param {autoComplete} item
   * @returns {boolean}
   * @memberof SearchPage
   */
  isBook(item: autoComplete): boolean {
    if (item.type === 'book') {
      return true
    }
    return false;
  }

  /**
   *  类型是否是author
   *
   * @author qin
   * @param {autoComplete} item
   * @returns {boolean}
   * @memberof SearchPage
   */
  isAuthor(item: autoComplete): boolean {
    if (item.type === 'author') {
      return true
    }
    return false;
  }

  /**
   * 类型是否是bookList
   *
   * @author qin
   * @param {autoComplete} item
   * @returns {boolean}
   * @memberof SearchPage
   */
  isBookList(item: autoComplete): boolean {
    if (item.type === 'bookList') {
      return true
    }
    return false;
  }

  /**
   * 切换搜索页面
   *
   * @author qin
   * @memberof SearchPage
   */
  toggleSlides(index: number): void {
    this.search.lockSwipes(false)
    this.search.slideTo(index)
    this.search.lockSwipes(true)
  }


  toggleResult(e) {
    if (e.direction == 2) {
      this.target = "bookList"
    } else if (e.direction == 4) {
      this.target = "book"
    }
  }

  /**
   *获取搜索提示
   *
   * @author qin
   * @param {any} e
   * @memberof SearchPage
   */
  thisInput(e) {
    this.aotoCompleArr = [];
    this.searchString = e.value;
    if (this.searchString.length > 0) {
      //此处做autoComple查询
      this.mockAuto.forEach(element => {
        this.aotoCompleArr.push(element)
      })
      console.log(this.aotoCompleArr)
      this.toggleSlides(1);
      this.hasKey = true;
    } else {
      this.toggleSlides(0);
      this.hasKey = false;
    }
    // this.http.get('autoComplete', key).subscribe(f => {
    //   console.log(f)
    // }, err => {
    //   console.log(err)
    // })
  }



  /**
   * 开始搜索
   *
   * @author qin
   * @param {string} string
   * @memberof SearchPage
   */
  serachDone(string: string) {
    if (!this.hasKey) {
      super.showToast(this.toastCtrl, 'top', '搜索字段不能为空');
      return false;
    }

    //此处做搜索请求
    console.log('请求搜索信息')

    this.toggleSlides(2);
  }
}



