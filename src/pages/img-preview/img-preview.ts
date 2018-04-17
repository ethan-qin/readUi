import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeProvider } from '../../providers/native/native';

/**
 * Generated class for the ImgPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-img-preview',
  templateUrl: 'img-preview.html',
})
export class ImgPreviewPage {
  imgList: Array<string> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeProvider
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgPreviewPage');
    this.native.getPhotoLibrary().subscribe(f => {
      this.imgList = f;
      console.log(this.imgList)
    })
  }
  goDetails(item): void {
    this.navCtrl.push('ImgPreviewDetailsPage', { 'list': item })
  }
}
