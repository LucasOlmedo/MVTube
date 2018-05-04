import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { TvshowDetailPage } from '../tvshow-detail/tvshow-detail';
import { HomePage } from '../home/home';
import { SettingsProvider } from '../../providers/settings/settings';
import { FILTER } from '../../constants/api.constants';
import { FilterModalPage } from '../filter-modal/filter-modal';

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
    this.tvshows = navParams.get('tvshows');
    this.page = 1;
    this.timestamp = Math.floor(Date.now() / 1000);
    settings.getActiveTheme()
      .subscribe(theme => this.selectedTheme = theme);
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
      this.apiProvider.getWithFilter(
        this.page,
        'shows',
        this.search.sort,
        this.search.genre,
        this.search.order
      )
        .subscribe((response: any) => {
          for (let index = 0; index < response.length; index++) {
            let element = response[index];
            this.tvshows.push(element);
          }
          $scroll.complete();
        })
    }, 700);
  }

  filterShow() {
    let modalFilter = this.modal.create(FilterModalPage, {
      theme: this.selectedTheme,
      filter: {
        genre: FILTER.genre.movie_tvshow,
        sort: FILTER.sort.tvshow,
        order: FILTER.order
      },
      search: this.search,
      endpoint: 'shows'
    });

    modalFilter.onDidDismiss(data => {
      if (data != null) {
        this.tvshows = data.obj;
        this.search = data.search;
        this.page = 1;
        this.view.getContent().scrollToTop();
      }
    });

    modalFilter.present();
  }
}
