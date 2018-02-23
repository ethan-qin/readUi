import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';

import { SexPopComponent } from '../../components/sex-pop/sex-pop';

@Component({
  selector: 'page-find',
  templateUrl: 'find.html'
})
export class FindPage {
  title = '发现';
  constructor(
    public navCtrl: NavController,
    private popCtrl: PopoverController
  ) {

  }
  toggleSex(e): void {
    console.log(e)
    this.popCtrl.create(SexPopComponent, {}, {
      cssClass: 'sexPop'
    }).present({
      ev: e
    })
  }
  goSearch(): void {
    this.navCtrl.push('SearchPage', {}, { animate: true, animation: 'transition', duration: 500, direction: 'forward' });
  }
  openRank():void{
   this.navCtrl.push('RankPage') 
  }
}
