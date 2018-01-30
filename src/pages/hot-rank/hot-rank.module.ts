import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotRankPage } from './hot-rank';

@NgModule({
  declarations: [
    HotRankPage,
  ],
  imports: [
    IonicPageModule.forChild(HotRankPage),
  ],
})
export class HotRankPageModule {}
