import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { NativeProvider } from '../../providers/native/native';
import { UserServicesProvider } from '../../providers/user-services/user-services';

/**
 * Generated class for the ImgPreviewDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-img-preview-details',
  templateUrl: 'img-preview-details.html',
})
export class ImgPreviewDetailsPage {
  imgList: any;
  title: '选择图片';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public native: NativeProvider,
    public events: Events,
    private userServe: UserServicesProvider,
  ) {
    this.imgList = navParams.get('list')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgPreviewDetailsPage');
  }
  getBase64(item): void {
    this.native.getPhotoBase64(item).subscribe(f => {
      if (f) {
        this.userServe.uploadAvatar(f).then(f => {
          this.userServe.setUserInfo().then(f => {
            this.updateUserInfo();
            this.navCtrl.popAll()
          })
        })
      }
    })
  }

  updateUserInfo(): void {
    this.events.publish('_updateUserInfo', {})
  }
}
