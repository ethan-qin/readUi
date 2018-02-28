import { Component } from '@angular/core';

/**
 * Generated class for the SearchRadioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-radio',
  templateUrl: 'search-radio.html'
})
export class SearchRadioComponent {
  searchList: Array<any> = [];
  constructor() {
    this.searchList = [
      {
        idCode: 1,
        class: '人气排序',
        checked: true
      },
      {
        idCode: 2,
        class: '更新时间排序',
        checked: false
      },
      {
        idCode: 3,
        class: '总推荐排序',
        checked: false
      },
      {
        idCode: 4,
        class: '总收藏排序',
        checked: false
      },
      {
        idCode: 5,
        class: '总月票排序',
        checked: false
      },
      {
        idCode: 6,
        class: '会员周点击排序',
        checked: false
      },
      {
        idCode: 7,
        class: '会员月点击排序',
        checked: false
      },
      {
        idCode: 8,
        class: '会员总点击排序',
        checked: false
      },
      {
        idCode: 9,
        class: '字数排序',
        checked: false
      }
    ]
  }
  setValue(val: any): void {
    this.searchList.forEach(element => {
      if (element.idCode == val.idCode) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
  }
}
