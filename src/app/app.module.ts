import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AnimesPage } from '../pages/animes/animes';
import { MoviesPage } from '../pages/movies/movies';
import { TvshowsPage } from '../pages/tvshows/tvshows';
import { SettingsPage } from '../pages/settings/settings';
import { FilterModalPage } from '../pages/filter-modal/filter-modal';
import { AnimeDetailPage } from '../pages/anime-detail/anime-detail';
import { TvshowDetailPage } from '../pages/tvshow-detail/tvshow-detail';
import { MovieDetailPage, TrailerModal } from '../pages/movie-detail/movie-detail';

import { EpisodesComponent, EpisodeDetails } from '../components/episodes/episodes';

import { HelperProvider } from '../providers/helper/helper';
import { SettingsProvider } from '../providers/settings/settings';
import { PopcornApiProvider } from '../providers/popcorn-api/popcorn-api';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from "@ionic/storage";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Globalization } from "@ionic-native/globalization";
import { SocialSharing } from '@ionic-native/social-sharing';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    MoviesPage,
    AnimesPage,
    TvshowsPage,
    TrailerModal,
    SettingsPage,
    EpisodeDetails,
    MovieDetailPage,
    AnimeDetailPage,
    FilterModalPage,
    TvshowDetailPage,
    EpisodesComponent,
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
    AboutPage,
    MoviesPage,
    AnimesPage,
    TvshowsPage,
    TrailerModal,
    SettingsPage,
    EpisodeDetails,
    MovieDetailPage,
    AnimeDetailPage,
    FilterModalPage,
    TvshowDetailPage,
    EpisodesComponent,
  ],
  providers: [
    File,
    StatusBar,
    SplashScreen,
    FileTransfer,
    Globalization,
    SocialSharing,
    HelperProvider,
    URLSearchParams,
    SettingsProvider,
    PopcornApiProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
