import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { HomePage } from '../home/home';
import { SettingsProvider } from '../../providers/settings/settings';
import { FILTER } from "../../constants/api.constants";

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  movies: any;
  singleMovie: any;
  page: number;
  timestamp: any;
  selectedTheme: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiProvider: PopcornApiProvider,
    private modal: ModalController,
    private settings: SettingsProvider
  ) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.movies = navParams.get('movies');
    this.page = 1;
    settings.getActiveTheme()
      .subscribe(theme => this.selectedTheme = theme);
  }

  getMovieDetails(id) {
    this.apiProvider.movieDetail(id)
      .subscribe(response => {
        this.singleMovie = response;
        this.navCtrl.push(MovieDetailPage, {
          movie: this.singleMovie
        });
      });
  }

  doInfinite($scroll) {
    setTimeout(() => {
      this.page++;
      this.apiProvider.getMovies(this.page)
        .subscribe((response: any) => {
          for (let index = 0; index < response.length; index++) {
            let element = response[index];
            this.movies.push(element);
          }
          $scroll.complete();
        })
    }, 700);
  }

  randomMovie() {
    this.apiProvider.random('movie')
      .subscribe(response => {
        this.singleMovie = response;
        this.navCtrl.push(MovieDetailPage, {
          movie: this.singleMovie
        });
      });
  }

  filterMovie() {
    let modalFilter = this.modal.create(FilterModal, {
      theme: this.selectedTheme,
      filter: FILTER
    });
    modalFilter.present();
  }
}

@Component({
  selector: 'filter-movies',
  templateUrl: 'filter.html'
})
export class FilterModal {

  theme: any;
  filter: any;

  constructor(
    params: NavParams,
    private view: ViewController,
    private settings: SettingsProvider
  ) {
    this.theme = params.data.theme;
    this.filter = params.data.filter;
  }

  dismiss() {
    this.view.dismiss();
  }

}

