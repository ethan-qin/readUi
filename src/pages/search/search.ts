import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpProvider } from './../../providers/http/http';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  goRank() {
    this.navCtrl.push('HotRankPage')
  }


  /**
   *获取搜索提示
   *
   * @author qin
   * @param {any} e
   * @memberof SearchPage
   */
  thisInput(e) {
    console.log(e.target.value);
    let key = e.target.value;
    this.http.get('autoComplete', key).subscribe(f => {
      console.log(f)
    }, err => {
      console.log(err)
    })
  }
}
