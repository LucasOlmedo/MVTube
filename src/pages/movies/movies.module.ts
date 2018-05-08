import { MoviesPage } from './movies';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterModalPage } from '../filter-modal/filter-modal';

@NgModule({
  declarations: [
    MoviesPage,
    FilterModalPage 
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
  ],
})
export class MoviesPageModule {}
