import { SearchRadioComponent } from './../search-radio/search-radio';
import { SearchCheckboxComponent } from './../search-checkbox/search-checkbox';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Component } from '@angular/core';
import { SearchFiltrateComponent } from '../search-filtrate/search-filtrate';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the BookClassificationSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'book-classification-search',
  templateUrl: 'book-classification-search.html'
})
export class BookClassificationSearchComponent {
  searchCheckBox: Array<any> = [
    {
      idCode: 1,
      class: '上古蛮荒',
      checked: true
    },
    {
      idCode: 2,
      class: '热血江湖',
      checked: false
    },
    {
      idCode: 3,
      class: '古代情缘',
      checked: false
    },
    {
      idCode: 4,
      class: '宫闱宅斗',
      checked: false
    },
    {
      idCode: 5,
      class: '经商种田',
      checked: false
    },
    {
      idCode: 6,
      class: '古典架空',
      checked: false
    },
    {
      idCode: 7,
      class: '女尊王朝',
      checked: false
    }
  ]
  searchRadio: Array<any> = [
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
  searchFiltrate: Array<any> = [
    {
      code: 1,
      title: '字数',
      list: [
        {
          code: 1,
          idCode: 1,
          class: '不限',
          checked: true
        },
        {
          code: 1,
          idCode: 2,
          class: '30万以下',
          checked: false
        },
        {
          code: 1,
          idCode: 3,
          class: '30万-50万',
          checked: false
        },
        {
          code: 1,
          idCode: 4,
          class: '50万-100万',
          checked: false
        },
        {
          code: 1,
          idCode: 5,
          class: '100万-200万',
          checked: false
        },
        {
          code: 1,
          idCode: 6,
          class: '200万以上',
          checked: false
        }
      ]
    },
    {
      code: 2,
      title: '进度',
      list: [
        {
          code: 2,
          idCode: 7,
          class: '全部',
          checked: true
        },
        {
          code: 2,
          idCode: 8,
          class: '连载',
          checked: false
        },
        {
          code: 2,
          idCode: 9,
          class: '完本',
          checked: false
        }
      ]
    },
    {
      code: 3,
      title: '状态',
      list: [
        {
          code: 3,
          idCode: 10,
          class: '不限',
          checked: true
        },
        {
          code: 3,
          idCode: 11,
          class: '只看免费',
          checked: false
        },
        {
          code: 3,
          idCode: 12,
          class: '只看VIP',
          checked: false
        },
        {
          code: 3,
          idCode: 13,
          class: '只看A级签约',
          checked: false
        }
      ]
    },
  ];
  index: number;
  constructor(
    private popCtrl: PopoverController,
    public navCtrl: NavController,
  ) {
  }
  fun(e, index): void {
    let pop = this.popCtrl.create(SearchCheckboxComponent, { list: this.searchCheckBox }, { cssClass: 'searchPop' });
    pop.present({
      ev: e,
      animate: false
    })
    pop.onWillDismiss(() => {
      this.index = -1;
    })
    this.toggleIcon(index)
  }
  fun1(e, index): void {
    let pop = this.popCtrl.create(SearchRadioComponent, { list: this.searchRadio }, { cssClass: 'searchPop' });
    pop.present({
      ev: e,
      animate: false
    })
    pop.onWillDismiss(() => {
      this.index = -1;
    })
    this.toggleIcon(index)
  }
  fun3(e, index): void {
    let pop = this.popCtrl.create(SearchFiltrateComponent, { list: this.searchFiltrate }, { cssClass: 'searchPop' });
    pop.present({
      ev: e,
      animate: false
    });
    pop.onWillDismiss(() => {
      this.index = -1;
    })
    this.toggleIcon(index)
  }
  toggleIcon(index): void {
    console.log('这个index是', index)
    if (this.index && this.index == index) {
      this.index == -1;
    } else {
      this.index = index;

    }
  }
}
