import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { BaseUI } from '../../common/baseUI';
import { HttpProvider } from './../../providers/http/http';

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
    { id: 1, icon: '', type: 'bookList', des: '书单', preview: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150', content: '一本书，一壶酒，一曲长歌，一剑天涯' },  //书单格式
    { id: 2, icon: '', type: 'author', des: '作家', preview: '', content: '一剑霜' },  //作者格式
    { id: 3, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑飞仙' },  //书籍格式
    { id: 4, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑倾天' },
    { id: 5, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑凌尘' },
    { id: 6, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑通天传' },
    { id: 7, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑风尊' },
    { id: 8, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑天途' },
    { id: 9, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑惊雷' },
    { id: 10, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑逍遥行' },
    { id: 11, icon: '', type: 'book', des: '书籍', preview: '', content: '一剑娇仙' },
  ]

  searchString: string;                   //用户输入的字段
  hasKey: boolean = false;                //是否处于autoComple页面
  aotoCompleArr: Array<any>=[];           //自动完成提示数据组

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpProvider,
    private toastCtrl: ToastController
  ) {
    super()
  }

  ionViewDidLoad() {
    this.search.lockSwipes(true)
  }

  goRank() {
    this.navCtrl.push('HotRankPage')
  }


  /**
   * 切换搜索页面
   *
   * @author qin
   * @memberof SearchPage
   */
  toggleSlides(index): void {
    this.search.lockSwipes(false)
    this.search.slideTo(index)
    this.search.lockSwipes(true)
  }

  /**
   *获取搜索提示
   *
   * @author qin
   * @param {any} e
   * @memberof SearchPage
   */
  thisInput(e) {
    this.searchString = e.target.value;
    console.log('aaaaaaaaaaaa')
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
      this.aotoCompleArr=[];
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
  }
}
