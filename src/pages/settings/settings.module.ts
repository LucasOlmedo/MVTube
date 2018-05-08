import { NgModule } from '@angular/core';
import { SettingsPage } from './settings';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule, Platform } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings/settings';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(SettingsPage),
  ],
})
export class SettingsPageModule {

  constructor(
    private platform: Platform,
    private settingsProvider: SettingsProvider
  ) {
    this.platform.ready()
      .then(() => {
        this.setTranslateOption();
      });
  }

  setTranslateOption() {
    this.settingsProvider.setTranslateOption();
  }
}
