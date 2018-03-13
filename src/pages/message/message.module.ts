import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import { NgxEchartsModule } from "ngx-echarts";
@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    NgxEchartsModule,
    IonicPageModule.forChild(MessagePage),
  ],
})
export class MessagePageModule { }
