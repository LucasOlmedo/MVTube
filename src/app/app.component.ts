import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsProvider } from '../providers/settings/settings';
import { SettingsPage } from '../pages/settings/settings';
import { TranslateService } from '@ngx-translate/core';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;
  selectedTheme: String;
  selectedLang: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private settingsProvider: SettingsProvider,
    private translate: TranslateService
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'HOME_PAGE', component: HomePage },
      { title: 'SETTINGS_PAGE', component: SettingsPage },
      { title: 'ABOUT_PAGE', component: AboutPage },
    ];

  }

  initializeApp() {
    this.initLang();
    this.initSettings();
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  private initSettings() {
    this.settingsProvider.getActiveTheme()
      .subscribe(theme => this.selectedTheme = theme);
  }

  private initLang() {
    this.settingsProvider.getActiveLang()
      .then(lang => {
        lang != null
          ? this.selectedLang = lang
          : this.selectedLang = this.settingsProvider.language;

        this.translate.use(this.selectedLang);
      });
  }

}
