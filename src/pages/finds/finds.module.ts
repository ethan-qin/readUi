import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindsPage } from './finds';

@NgModule({
  declarations: [
    FindsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FindsPage),
  ],
})
export class FindsPageModule {}
