import { Component, Input } from '@angular/core';
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
  @Input() searchCheckBox: Array<any>;
  @Input() searchRadio: Array<any>;
  @Input() searchFiltrate: Array<any>;
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
    console.log(this.searchCheckBox[0]);

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setTitle();
    this.addListenSetTitle();
  }
  checkBox(e, index): void {
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
  radio(e, index): void {
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
  flitrate(e, index): void {
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
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.events.unsubscribe('search:change',()=>[
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
