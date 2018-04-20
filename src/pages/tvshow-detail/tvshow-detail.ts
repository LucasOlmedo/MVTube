import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperProvider } from '../../providers/helper/helper';

@IonicPage()
@Component({
  selector: 'page-tvshow-detail',
  templateUrl: 'tvshow-detail.html',
})
export class TvshowDetailPage {

  tvshow: any;
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
    public helper: HelperProvider
  ) {
    this.timestamp = Math.floor(Date.now() / 1000);
    this.tvshow = navParams.get('tvshow');
    this.star = this.helper.transformRating(this.tvshow.rating.percentage, this.star);
  }

  formatGenre(gen, array) {
    return this.helper.formatGenre(gen, array)
  }

}
