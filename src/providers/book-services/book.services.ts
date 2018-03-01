import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as api from './../api/api'
import { HttpProvider } from './../http/http';
import { BaseUI } from '../../common/baseUI';
/*
  Generated class for the BookServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookServicesProvider extends BaseUI {

  constructor(
    public http: HttpProvider
  ) {
    super()
  }

  getBookList(): Observable<any> {
    // super.showLoading(this.loaddingCtrl, "加载中");
    let a = {
      user: '张三',
      age: '18'
    }
    return Observable.create(observable => {
      this.http.get(api.BOOKLIST, a).subscribe(f => {
        observable.next(f);
      }, err => {

      })
    })
  }
}


/**
 * 书籍弹窗信息
 *
 * @author qin
 * @export
 * @class PersonBookInfo
 */
export class PersonBookInfo {
  bookId: number;         //书籍id
  bookName: string;       //书籍名称
  bookPrevier: string;    //书籍封面
  userName: string;       //用户名
  fansNum: number;        //粉丝值
  fansRank: number;       //粉丝榜名次
  nowGrade: string;       //粉丝等级名称
  nextGrade: {
    gradeName: string;    //下一等级名称
    needFansNum: number;  //所需粉丝值
  }
  autoBuy: boolean;       //自动订阅
  monthly: number;        //月票数
  recommend: number;      //推荐票数
}
