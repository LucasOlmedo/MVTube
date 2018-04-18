import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
import { defaultLang, availableLang, systemOptions } from "../../constants/settings.constants";

@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<String> = new BehaviorSubject('light-theme');
  public language = systemOptions.systemLang;
  public availableLanguages = availableLang;

  constructor(
    private storage: Storage,
    private translate: TranslateService,
    private globalization: Globalization
  ) {
    this.initLang();
    this.initTheme();
  }

  private initTheme() {
    this.storage.get('theme')
      .then(value => {
        value != null
          ? this.theme.next(value)
          : this.storage.set('theme', 'light-theme');
      });
  }

  public setActiveTheme(val) {
    this.storage.set('theme', val)
      .then(value => this.theme.next(value));
  }

  public getActiveTheme() {
    return this.theme.asObservable();
  }

  private initLang() {
    this.storage.get('lang')
      .then(lang => {
        lang != null
          ? this.language = lang
          : this.language = systemOptions.systemLang
      });
  }

  public getActiveLang() {
    return this.storage.get('lang');
  }

  public setActiveLang(lang) {
    this.storage.set('lang', lang)
      .then(value => {
        this.language = lang
        this.translate.use(this.language);
      });
  }

  public setTranslateOption() {
    this.translate.setDefaultLang(defaultLang);
    if ((<any>window).cordova) {
      this.setTranslateForCordova();
    } else {
      this.setTranslateForBrowser();
    }
  }

  private setTranslateForCordova() {
    this.globalization.getPreferredLanguage()
      .then(result => {
        let language = this.getSuitableLang(result.value);
        this.translate.use(language);
        systemOptions.systemLang = language;
      });
  }

  private setTranslateForBrowser() {
    let browserLang = this.translate.getBrowserLang() || defaultLang;
    let language = this.getSuitableLang(browserLang);
    this.translate.use(language);
    systemOptions.systemLang = language;
  }

  private getSuitableLang(lang: string) {
    lang = lang.substring(0, 2).toLowerCase();
    return availableLang.some(val => val.code == lang) ? lang : defaultLang;
  }

  public instantTranslate(arg) {
    return this.translate.instant(arg);
  }
}
