import { Component } from '@angular/core';
import { SettingsProvider } from '../../providers/settings/settings';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { TvshowDetailPage } from '../tvshow-detail/tvshow-detail';
import { AnimeDetailPage } from '../anime-detail/anime-detail';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  single: any;
  timestamp: any;
  favorites: any = {
    movies: null,
    shows: null,
    animes: null
  };

  constructor(
    public navParams: NavParams,
    private view: ViewController,
    public navCtrl: NavController,
    private settings: SettingsProvider,
    private apiProvider: PopcornApiProvider,
  ) {
    this.settings.getAllFavorites('movies')
      .then(response => {
        this.favorites.movies = response;
      });
    this.settings.getAllFavorites('shows')
      .then(response => {
        this.favorites.shows = response;
      });
    this.settings.getAllFavorites('animes')
      .then(response => {
        this.favorites.animes = response;
      });
  }

  getMovieDetails(id) {
    this.apiProvider.movieDetail(id)
      .subscribe(response => {
        this.navCtrl.push(MovieDetailPage, {
          movie: response
        });
      });
  }

  getTvShowDetails(id) {
    this.apiProvider.tvShowDetail(id)
      .subscribe(response => {
        this.navCtrl.push(TvshowDetailPage, {
          tvshow: response
        });
      });
  }

  getAnimeDetails(id) {
    this.apiProvider.animeDetail(id)
      .subscribe(response => {
        this.navCtrl.push(AnimeDetailPage, {
          anime: response
        });
      });
  }

}
