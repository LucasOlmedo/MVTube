import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvshowsPage } from './tvshows';
import { FilterModalPage } from '../filter-modal/filter-modal';

@NgModule({
  declarations: [
    TvshowsPage,
    FilterModalPage
  ],
  imports: [
    IonicPageModule.forChild(TvshowsPage),
  ],
})
export class TvshowsPageModule {}
