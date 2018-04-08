import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadHistoryPage } from './read-history';

@NgModule({
  declarations: [
    ReadHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadHistoryPage),
  ],
})
export class ReadHistoryPageModule {}
