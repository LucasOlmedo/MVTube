import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { TvshowDetailPage } from '../tvshow-detail/tvshow-detail';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tvshows',
  templateUrl: 'tvshows.html',
})
export class TvshowsPage {

  tvshows: any;
  singleShow: any;
  page: any;
  timestamp: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiProvider: PopcornApiProvider
  ) {
    this.tvshows = navParams.get('tvshows');
    this.page = 1;
    this.timestamp = Math.floor(Date.now() / 1000);
  }

  getTvShowDetails(id) {
    this.apiProvider.tvShowDetail(id)
      .subscribe(response => {
        this.singleShow = response;
        this.navCtrl.push(TvshowDetailPage, {
          tvshow: this.singleShow
        });
      });
  }

  doInfinite($scroll) {
    setTimeout(() => {
      this.page++;
      this.apiProvider.getTvShows(this.page)
        .subscribe((response: any) => {
          for (let index = 0; index < response.length; index++) {
            let element = response[index];
            this.tvshows.push(element);
          }
          $scroll.complete();
        })
    }, 700);
  }

  backHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
