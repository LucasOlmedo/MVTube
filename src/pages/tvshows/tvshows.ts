import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Content } from 'ionic-angular';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { TvshowDetailPage } from '../tvshow-detail/tvshow-detail';
import { SettingsProvider } from '../../providers/settings/settings';
import { FILTER } from '../../constants/api.constants';
import { FilterModalPage } from '../filter-modal/filter-modal';

@IonicPage()
@Component({
  selector: 'page-tvshows',
  templateUrl: 'tvshows.html',
})
export class TvshowsPage {

  @ViewChild(Content) content: Content;
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
    this.tvshows = navParams.get('tvshows');
    this.page = 1;
    this.settings.getActiveTheme()
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

  toogleSearch() {
    this.searchbar = !this.searchbar;
    this.content.resize();
  }

  filterByKeyword($event) {
    let key = $event.target.value;
    this.apiProvider.getWithFilter(1, 'shows', null, null, null, key)
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
        this.tvshows = response;
      });
  }
}
