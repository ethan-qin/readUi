import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBadgePage } from './my-badge';

@NgModule({
  declarations: [
    MyBadgePage,
  ],
  imports: [
    IonicPageModule.forChild(MyBadgePage),
  ],
})
export class MyBadgePageModule {}
