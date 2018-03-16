import { OnInit, OnDestroy } from '@angular/core';


import { IonicPage } from 'ionic-angular';

export abstract class BasePage implements OnInit, OnDestroy {
  constructor(
  ) {
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('我是基础页面，我离开了')
  }
  ngOnInit() {
    console.log('进入页面')
  }
}
