import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  selectedTheme: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settings: SettingsProvider,
    private toast: ToastController
  ) {
    this.settings.getActiveTheme()
      .subscribe(value => this.selectedTheme = value);
  }

  setSetting(theme) {
    this.settings.setActiveTheme(theme);
    let toast = this.toast.create({
      message: 'Theme changed!',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

}
