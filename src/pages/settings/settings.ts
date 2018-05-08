import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from '../../providers/settings/settings';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  languages: any;
  selectedLang: any;
  selectedTheme: String;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private toast: ToastController,
    private translate: TranslateService,
    private settingsProvider: SettingsProvider,
  ) {
    this.languages = settingsProvider.availableLanguages;
    this.selectedLang = settingsProvider.language;
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
