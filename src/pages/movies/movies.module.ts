import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviesPage, FilterModal } from './movies';

@NgModule({
  declarations: [
    MoviesPage,
    FilterModal 
  ],
  imports: [
    IonicPageModule.forChild(MoviesPage),
  ],
})
export class MoviesPageModule {}
