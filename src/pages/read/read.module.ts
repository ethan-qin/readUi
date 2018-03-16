import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadPage } from './read';

@NgModule({
  declarations: [
    ReadPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadPage),
  ],
})
export class ReadPageModule {}
