import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from '../../providers/settings/settings';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SUBTITLE_LANG } from '../../constants/api.constants';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  flag: any;
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
        let lg = SUBTITLE_LANG.filter(item => item.code == value);
        if (lg.length > 0) {
          this.flag = lg[0].flag;
        } else {
          this.flag = 'https://restcountries.eu/data/usa.svg';
        }
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
    let lg = SUBTITLE_LANG.filter(item => item.code == $lang);
    if (lg.length > 0) {
      this.flag = lg[0].flag;
    } else {
      this.flag = 'https://restcountries.eu/data/usa.svg';
    }
    this.settingsProvider.setActiveLang($lang);
  }

}
