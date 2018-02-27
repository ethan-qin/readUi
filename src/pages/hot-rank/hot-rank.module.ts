import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotRankPage } from './hot-rank';

@NgModule({
  declarations: [
    HotRankPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HotRankPage),
  ],
})
export class HotRankPageModule {}
