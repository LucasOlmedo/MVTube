import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from '../../providers/settings/settings';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { MoviesPage } from '../movies/movies';
import { TvshowsPage } from '../tvshows/tvshows';
import { AnimesPage } from '../animes/animes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedLang: any;
  movies: any;
  tvShows: any;
  animes: any;

  constructor(
    public navCtrl: NavController,
    private translate: TranslateService,
    private settingsProvider: SettingsProvider,
    private api: PopcornApiProvider
  ) {
    this.settingsProvider.getActiveLang()
      .then(lang => {
        lang != null
          ? this.selectedLang = lang
          : this.selectedLang = this.settingsProvider.language;

        this.translate.use(this.selectedLang);
      });
  }

  getAllMovies() {
    this.api.getMovies(1)
      .subscribe(response => {
        this.movies = response;
        this.navCtrl.setRoot(MoviesPage, {
          movies: this.movies
        });
      });
  }

  getAllTvShows() {
    this.api.getTvShows(1)
      .subscribe(response => {
        this.tvShows = response;
        this.navCtrl.setRoot(TvshowsPage, {
          tvshows: this.tvShows
        });
      });
  }

  getAllAnimes() {
    this.api.getAnimes(1)
      .subscribe(response => {
        this.animes = response;
        this.navCtrl.setRoot(AnimesPage, {
          animes: this.animes
        });
      });
  }

}