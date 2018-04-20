import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';

import { IonicStorageModule } from "@ionic/storage";
import { SettingsPage } from '../pages/settings/settings';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { Globalization } from "@ionic-native/globalization";
import { AboutPage } from '../pages/about/about';
import { PopcornApiProvider } from '../providers/popcorn-api/popcorn-api';
import { MoviesPage } from '../pages/movies/movies';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { HelperProvider } from '../providers/helper/helper';
import { TvshowsPage } from '../pages/tvshows/tvshows';
import { AnimesPage } from '../pages/animes/animes';
import { TvshowDetailPage } from '../pages/tvshow-detail/tvshow-detail';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    AboutPage,
    MoviesPage,
    MovieDetailPage,
    TvshowsPage,
    TvshowDetailPage,
    AnimesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    AboutPage,
    MoviesPage,
    MovieDetailPage,
    TvshowsPage,
    TvshowDetailPage,
    AnimesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SettingsProvider,
    Globalization,
    PopcornApiProvider,
    HelperProvider
  ]
})
export class AppModule { }
