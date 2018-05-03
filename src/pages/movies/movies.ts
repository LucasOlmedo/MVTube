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
  search = {
    genre: '',
    sort: '',
    order: '-1',
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiProvider: PopcornApiProvider,
    private modal: ModalController,
    private settings: SettingsProvider,
    private view: ViewController
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
      this.apiProvider.getWithFilter(
        this.page,
        'movies',
        this.search.sort,
        this.search.genre,
        this.search.order
      )
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
      filter: FILTER,
      search: this.search
    });

    modalFilter.onDidDismiss(data => {
      if (data != null) {
        this.movies = data.movies;
        this.search = data.search;
        this.page = 1;
        this.view.getContent().scrollToTop();
      }
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
  search = {
    genre: '',
    sort: '',
    order: '-1',
  };
  movies: any = null;

  constructor(
    params: NavParams,
    private view: ViewController,
    private settings: SettingsProvider,
    private api: PopcornApiProvider,
  ) {
    this.theme = params.data.theme;
    this.filter = params.data.filter;
    this.search = params.data.search;
  }

  applyFilters() {
    this.api.getWithFilter(
      1,
      'movies',
      this.search.sort,
      this.search.genre,
      this.search.order
    )
      .subscribe(response => {
        this.movies = response
        this.view.dismiss({
          movies: this.movies,
          search: this.search
        });
      });
  }

  resetFilters() {
    this.search = {
      genre: '',
      sort: '',
      order: '-1',
    };
  }

  dismiss() {
    this.view.dismiss();
  }

}

