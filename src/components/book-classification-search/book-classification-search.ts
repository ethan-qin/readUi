import { Component, Input, ViewChild } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';

import { SearchFiltrateComponent } from '../search-filtrate/search-filtrate';
import { SearchRadioComponent } from './../search-radio/search-radio';
import { SearchCheckboxComponent } from './../search-checkbox/search-checkbox';
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
  @ViewChild('searchContainer') searchContainer: any;
  @Input() searchCheckBox: Array<any>;
  @Input() searchRadio: Array<any>;
  @Input() searchFiltrate: Array<any>;
  top: string = '95'
  checkBoxTitle: Array<any> = [];
  radioTitle: Array<any> = [];
  filtrateTitle: Array<any> = [];
  index: number;
  constructor(
    private popCtrl: PopoverController,
    public navCtrl: NavController,
    private events: Events
  ) {
  }

  ngOnInit() {
    this.setTitle();
    this.addListenSetTitle();
  }
  ngAfterViewInit() {
    this.top = this.searchContainer.nativeElement.getBoundingClientRect().top + this.searchContainer.nativeElement.offsetHeight
  }
  ionViewDidLoad() {
    console.log('视图加载完成')
  }
  checkBox(e, index): void {
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: this.top,
          };
        }
      }
    };
    let pop = this.popCtrl.create(SearchCheckboxComponent, { list: this.searchCheckBox }, { cssClass: 'searchPop' });
    pop.present({
      ev: ev,
      animate: false
    })
    pop.onWillDismiss(() => {
      this.index = -1;
    })
    this.toggleIcon(index)
  }
  radio(e, index): void {
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: this.top,
          };
        }
      }
    };
    let pop = this.popCtrl.create(SearchRadioComponent, { list: this.searchRadio }, { cssClass: 'searchPop' });
    pop.present({
      ev: ev,
      animate: false
    })
    pop.onWillDismiss(() => {
      this.index = -1;
    })
    this.toggleIcon(index)
  }
  flitrate(e, index): void {
    let ev = {
      target: {
        getBoundingClientRect: () => {
          return {
            top: this.top,
          };
        }
      }
    };
    let pop = this.popCtrl.create(SearchFiltrateComponent, { list: this.searchFiltrate }, { cssClass: 'searchPop' });
    pop.present({
      ev: ev,
      animate: false
    });
    pop.onWillDismiss(() => {
      this.index = -1;
    })
    this.toggleIcon(index)
  }
  toggleIcon(index): void {
    if (this.index && this.index == index) {
      this.index == -1;
    } else {
      this.index = index;

    }
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.events.unsubscribe('search:change', () => [
      console.log('取消订阅')
    ])
  }
  private setTitle(): void {
    this.checkBoxTitle = [];
    this.radioTitle = [];
    this.filtrateTitle = [];
    this.searchCheckBox.forEach(element => {
      if (element.checked) {
        this.checkBoxTitle.push(element)
      }
    });
    this.searchRadio.forEach(element => {
      if (element.checked) {
        this.radioTitle.push(element)
      }
    });
    this.searchFiltrate.forEach(Element => {
      Element.list.forEach(element => {
        if (element.checked) {
          this.filtrateTitle.push(element)
        }
      });
    });
  }

  private addListenSetTitle(): void {
    this.events.subscribe('search:change', () => {
      this.setTitle()
    })
  }
}
