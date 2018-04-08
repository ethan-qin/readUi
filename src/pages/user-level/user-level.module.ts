import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserLevelPage } from './user-level';

@NgModule({
  declarations: [
    UserLevelPage,
  ],
  imports: [
    IonicPageModule.forChild(UserLevelPage),
  ],
})
export class UserLevelPageModule {}
