import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { SexPopComponent } from '../../components/sex-pop/sex-pop';
import { TimePopComponent } from '../../components/time-pop/time-pop';

/**
 * Generated class for the RankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rank',
  templateUrl: 'rank.html',
})
export class RankPage {
  items:Array<any>=[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popCtrl:PopoverController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankPage');
    for(let i =1;i<100;i++){
      this.items.push({rank:i})
    }
  }
  toggleClass(ev):void{
    this.popCtrl.create(SexPopComponent,{},{
      cssClass:'RankPopClass'
    }).present({
      ev:ev,
      animate:false
    })
  }

  toggleTime(ev):void{
    this.popCtrl.create(TimePopComponent,{},{
      cssClass:'RankPopTime'
    }).present({
      ev:ev,
      animate:false
    })
  }
}
