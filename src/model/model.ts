/***************************native*****************************************/

export interface batteryStu {
  level: number; // 电量百分比
  isPlugged: boolean; // 是否充电中
}

/**************************************************************************/

/*****************************后台接口数据**********************************/
// 书籍信息
export interface bookItem {
  bookId: number;
  img: string; // 封面
  title: string; // 书籍名称
  content: string; // 简介
  searchNum: number; // 搜索次数
  author: string; // 作者
  num: number; // 字数
  stu: string; // 书籍状态
  tag: string; // 标签分类
  rank: number; // 排名
  hasRank: boolean; // 是否展示排名
}
// 书籍列表信息
export interface bookList {
  listName: string;
  books: Array<bookItem>;
}
export interface chapterItem {
  catalogId: number; // 章节id
  title: string; // 章节名
  isVip: boolean; // 是否Vip
  isFree: boolean; // 是否购买
  bookmark: boolean; // 云端阅读位置
  time: Date; // 更新时间
  percent:number;
}

// 书籍目录
export interface catalog {
  headerName?: string; // 卷名
  catalog: Array<chapterItem>;
}

// 登录表单

export interface Login {
  phone: number; // 手机号
  password: string; // 密码
}

// 用户个人信息

export interface User {
  nickName: string; // 昵称
  token: string; // token
  avatar: string; // 头像
  idCode: number; // 用户id
  monthlyTicket: number; // 月票数
  recommendTicket: number; // 推荐票数
  coni: number; // 消费点数
  payRank: string; // 等级
}

// 积分榜 单条数据
export interface scoreItem {
  comment: string; // 评语
  bookId: number; // 书籍id
  bookCover: string; // 书籍封面
  bookTitle: string; // 书籍名称
  bookIntro: string; // 书籍简介
  bookAuthor: string; // 书籍作者
  bookStu: string; // 书籍状态
  bookTag: string; // 书籍标签分类
  bookNum: number; // 书籍字数
  isCollect: boolean; // 是否已经收藏
}

// 一周积分榜数据
export interface scoreList {
  startTime: Date; // 榜单开始日期
  endTime: Date; // 榜单结束日期
  bookList: Array<scoreItem>; // 榜单数据
}

/**
 * 搜索提示栏
 *
 * @author qin
 * @export
 * @interface autoComplete
 */
export interface autoComplete {
  id: number; //顺序id
  icon: string; //图标 默认为空
  type: string; //类型 bookList:书单; author:作者; book:书籍;
  des: string; //类型描述
  preview: {
    //书单前两本书的封面
    face?: string;
    back?: string;
  };
  content: string; //内容 bookList：书单名; author:作者名; book:书籍名
}
