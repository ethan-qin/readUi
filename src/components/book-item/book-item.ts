import { bookItem } from './../../model/model';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the BookItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-item',
  templateUrl: 'book-item.html'
})
export class BookItemComponent {
  @Input('itemData') item: bookItem;
  constructor() {
    if (!this.item) {
      this.item = {
        bookId: 0,
        img: 'https://qidian.qpic.cn/qdbimg/349573/1006635077/150',
        title: '数据异常',
        content: '数据异常',
        searchNum: 0,
        author: '暂无',
        num: 0,
        stu: '暂无',
        tag: '暂无',
        rank: 0,
        hasRank: false,
      }
    }
  }
}
