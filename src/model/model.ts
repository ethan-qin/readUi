
// 书籍信息
interface bookItem {
  bookId: number,
  img: string,        // 封面
  title: string,      // 书籍名称
  content: string,    // 简介
  searchNum: number,  // 搜索次数
  author: string,     // 作者
  num: number,        // 字数
  stu: string,        // 书籍状态
  tag: string,        // 标签分离
  rank: number,       // 排名
  hasRank: boolean       // 是否展示排名
}
// 书籍列表信息
interface bookList {
  listName: string;
  books: Array<bookItem>
}

// 书籍目录
interface catalog {
  headerName?: string;        // 卷名
  catalog: Array<{
    catalogId: number,      // 章节id
    title: string,          // 章节名
    isVip: boolean,         // 是否Vip
    bookmark: boolean       // 云端阅读位置
    time: Date              // 更新时间
  }>
}

