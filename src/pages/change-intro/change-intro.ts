import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ChangeIntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-intro',
  templateUrl: 'change-intro.html',
})
export class ChangeIntroPage {
  content: string = "";
  nowContent: string = "";
  change: boolean = false;
  maxLength: number = 100;
  nowLength: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.content = this.navParams.get('intro');
    this.nowContent = this.content;
    this.setLength()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeIntroPage');
  }

  async ionViewCanLeave() {
    if (this.content !== this.nowContent) {
      let f = await this.alertSheet();
      return f;
    }
  }
  
  setLength() {
    this.nowLength = this.content.length;
    if (this.content !== this.nowContent) {
      this.change = true;
    } else {
      this.change = false;
    }
  }

  save(): void {
    this.nowContent = this.content;
    this.setLength()
  }

  alertSheet(): Promise<any> {
    return new Promise(resolve => {
      let alert = this.alertCtrl.create({
        subTitle: '是否保存',
        cssClass: '_alert_save',
        buttons: [
          {
            text: '取消',
            cssClass: '_alert-center',
            handler: () => {
              resolve(true)
            }
          },
          {
            text: '修改',
            cssClass: '_alert-center',
            handler: () => {
              this.save();
              resolve(true)
            }
          }
        ]
      });
      alert.present();
    })

  }
}
