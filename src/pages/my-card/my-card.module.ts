import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCardPage } from './my-card';

@NgModule({
  declarations: [
    MyCardPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCardPage),
  ],
})
export class MyCardPageModule {}
