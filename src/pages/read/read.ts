import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Content, Slide } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SlideContainer } from 'ionic-angular/components/slides/swiper/swiper-interfaces';

/**
 * Generated class for the ReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {
  @ViewChild(Content) content: Content;
  @ViewChild(Slide) slide: SlideContainer;
  showBar: boolean = true;
  saturation:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private statusBar: StatusBar
  ) {
    this.statusBar.hide()
  }
  change():void{
    console.log(this.saturation)
  }
  ionViewDidLoad() {

    console.log(this.content.enableJsScroll);
    
    console.log('ionViewDidLoad ReadPage');
    // setInterval(() => {
    //   this.showBar = !this.showBar;
    // }, 2000)
  }

}
