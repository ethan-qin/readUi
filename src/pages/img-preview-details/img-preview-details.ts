import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  title:'选择图片';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imgList=navParams.get('list')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgPreviewDetailsPage');
  }

}
