import { AnimesPage } from './animes';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AnimesPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimesPage),
  ],
})
export class AnimesPageModule {}
