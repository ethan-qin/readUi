import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyLevelPage } from './my-level';

@NgModule({
  declarations: [
    MyLevelPage,
  ],
  imports: [
    IonicPageModule.forChild(MyLevelPage),
  ],
})
export class MyLevelPageModule {}
