import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginInPage } from './login-in';

@NgModule({
  declarations: [
    LoginInPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginInPage),
  ],
})
export class LoginInPageModule {}
