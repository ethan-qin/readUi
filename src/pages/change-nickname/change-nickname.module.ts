import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeNicknamePage } from './change-nickname';

@NgModule({
  declarations: [
    ChangeNicknamePage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeNicknamePage),
  ],
})
export class ChangeNicknamePageModule {}
