import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  selectedTheme: String;
  selectedLang: any;
  languages: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private settingsProvider: SettingsProvider,
    private toast: ToastController,
    private translate: TranslateService
  ) {
    this.selectedLang = settingsProvider.language;
    this.languages = settingsProvider.availableLanguages;
    this.settingsProvider.getActiveLang()
      .then(value => {
        value != null
          ? this.selectedLang = value
          : this.selectedLang = this.settingsProvider.language;

        this.translate.use(this.selectedLang);
      });
    this.settingsProvider.getActiveTheme()
      .subscribe(value => this.selectedTheme = value);
  }

  setSetting(theme) {
    this.settingsProvider.setActiveTheme(theme);
    let toast = this.toast.create({
      message: this.settingsProvider.instantTranslate('SETTINGS_PAGE.THEME_CHANGE'),
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  applyLanguage($lang) {
    this.settingsProvider.setActiveLang($lang);
  }

}
