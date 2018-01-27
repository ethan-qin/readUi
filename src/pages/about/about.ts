import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  title = '欢迎来到关于页';
  constructor(
    public navCtrl: NavController,
  ) {

  }


}
