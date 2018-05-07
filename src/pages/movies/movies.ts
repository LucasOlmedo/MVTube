import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Content } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { HomePage } from '../home/home';
import { SettingsProvider } from '../../providers/settings/settings';
import { FILTER } from "../../constants/api.constants";
import { FilterModalPage } from '../filter-modal/filter-modal';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  @ViewChild(Content) content: Content;
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
  searchbar: boolean = false;
  doScroll: boolean = true;

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
    let modalFilter = this.modal.create(FilterModalPage, {
      theme: this.selectedTheme,
      filter: {
        genre: FILTER.genre.movie_tvshow,
        sort: FILTER.sort.tvshow,
        order: FILTER.order
      },
      search: this.search,
      endpoint: 'movies'
    });

    modalFilter.onDidDismiss(data => {
      if (data != null) {
        this.movies = data.obj;
        this.search = data.search;
        this.page = 1;
        this.view.getContent().scrollToTop();
      }
    });

    modalFilter.present();
  }

  toogleSearch() {
    this.searchbar = !this.searchbar;
    this.content.resize();
  }

  filterByKeyword($event) {
    let key = $event.target.value;
    this.apiProvider.getWithFilter(1, 'movies', null, null, null, key)
      .subscribe(response => {
        if ($event.target.value == '') {
          this.doScroll = true;
          this.page = 1;
        } else {
          this.doScroll = false;
          this.view.getContent().scrollToTop();
        }
        if ($event instanceof MouseEvent) {
          this.doScroll = true;
          this.page = 1;
        }
        this.movies = response;
      });
  }
}
