import { Component } from '@angular/core';
import { SettingsProvider } from '../../providers/settings/settings';
import { PopcornApiProvider } from '../../providers/popcorn-api/popcorn-api';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {

  theme: any;
  filter: any;
  search = {
    genre: '',
    sort: '',
    order: '-1',
  };
  obj: any = null;
  endpoint: string = '';

  constructor(
    public params: NavParams,
    private view: ViewController,
    public navCtrl: NavController,
    private api: PopcornApiProvider,
    private settings: SettingsProvider,
  ) {
    this.theme = params.data.theme;
    this.filter = params.data.filter;
    this.search = params.data.search;
    this.endpoint = params.data.endpoint;
  }

  applyFilters() {
    this.api.getWithFilter(
      1,
      this.endpoint,
      this.search.sort,
      this.search.genre,
      this.search.order
    )
      .subscribe(response => {
        this.obj = response
        this.view.dismiss({
          obj: this.obj,
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
