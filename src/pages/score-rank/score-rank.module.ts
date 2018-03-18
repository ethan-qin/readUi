import { PipesModule } from './../../pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreRankPage } from './score-rank';

@NgModule({
  declarations: [
    ScoreRankPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScoreRankPage),
  ],
})
export class ScoreRankPageModule {}
