import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  favorites: any;
  timestamp: any;
  singleMovie: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private view: ViewController,
    private settings: SettingsProvider,
  ) {
    this.settings.getAllFavorites()
      .then(response => {
        console.log(response);
      });
  }

}
