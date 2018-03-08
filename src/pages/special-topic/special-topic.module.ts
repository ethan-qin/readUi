import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialTopicPage } from './special-topic';

@NgModule({
  declarations: [
    SpecialTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialTopicPage),
  ],
})
export class SpecialTopicPageModule {}
