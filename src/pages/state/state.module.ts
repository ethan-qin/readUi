import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatePage } from './state';

@NgModule({
  declarations: [
    StatePage,
  ],
  imports: [
    IonicPageModule.forChild(StatePage),
  ],
})
export class StatePageModule {}
