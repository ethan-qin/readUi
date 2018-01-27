

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
