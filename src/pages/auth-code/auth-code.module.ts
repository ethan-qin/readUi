import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthCodePage } from './auth-code';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AuthCodePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AuthCodePage),
  ],
})
export class AuthCodePageModule {}
