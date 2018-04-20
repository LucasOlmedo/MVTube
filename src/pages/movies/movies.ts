import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { MovieDetailPage } from '../movie-detail/movie-detail';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiProvider: PopcornApiProvider
  ) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.movies = navParams.get('movies');
    this.page = 1;
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

}
