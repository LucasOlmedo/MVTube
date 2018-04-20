import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimesPage } from './animes';

@NgModule({
  declarations: [
    AnimesPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimesPage),
  ],
})
export class AnimesPageModule {}
