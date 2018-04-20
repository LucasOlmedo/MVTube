import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movie: any;
  star: any = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private helper: HelperProvider
  ) {
    this.movie = this.navParams.get('movie');
    this.star = this.helper.transformRating(this.movie.rating.percentage, this.star);
  }

  formatGenre(gen, array) {
    return this.helper.formatGenre(gen, array)
  }
}
