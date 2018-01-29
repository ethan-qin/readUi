import { SettingPage } from './../setting/setting';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  open(): void {
    this.navCtrl.push(SettingPage)
  }
}
