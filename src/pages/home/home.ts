import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { SettingsProvider } from '../../providers/settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedLang: any;

  constructor(
    public navCtrl: NavController,
    private translate: TranslateService,
    private settingsProvider: SettingsProvider
  ) {
    this.settingsProvider.getActiveLang()
      .then(lang => {
        lang != null
          ? this.selectedLang = lang
          : this.selectedLang = this.settingsProvider.language;

        this.translate.use(this.selectedLang);
      });
  }

}