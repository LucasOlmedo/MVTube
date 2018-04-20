import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';

@IonicPage()
@Component({
  selector: 'page-anime-detail',
  templateUrl: 'anime-detail.html',
})
export class AnimeDetailPage {

  anime: any;
  star: any = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
  };
  timestamp: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private helper: HelperProvider
  ) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.anime = navParams.get('anime');
    this.star = this.helper.transformRating(this.anime.rating.percentage, this.star);
  }

  formatGenre(gen, array) {
    return this.helper.formatGenre(gen, array)
  }

}
