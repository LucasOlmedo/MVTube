import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { NavParams, ViewController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'episodes',
  templateUrl: 'episodes.html'
})
export class EpisodesComponent implements OnInit {

  @Input() episode: any;
  @ViewChild("cardContent") cardContent: any;
  expanded: boolean;

  constructor(
    private render: Renderer,
    public navParams: NavParams,
    private popover: PopoverController
  ) {
    this.expanded = false;
  }

  ngOnInit() {
    this.render.setElementStyle(
      this.cardContent.nativeElement,
      'transition',
      'max-height 450ms, padding 300ms'
    );
  }

  toggleCard() {

    if (this.expanded) {
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'max-height',
        '0px'
      );
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'padding',
        '0px 10px'
      );
    } else {
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'max-height',
        '3400px'
      );
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'padding',
        '5px 10px'
      );
    }

    this.expanded = !this.expanded;
  }

  episodeInfo(episode) {
    let pop = this.popover.create(EpisodeDetails, {
      description: episode.overview,
      title: episode.title
    });
    pop.present();
  }

}

@Component({
  template: `
  <ion-header>
    <ion-toolbar padding>
      {{title}}
    </ion-toolbar>
  </ion-header>
    <ion-content>
      <ion-grid padding>
        <ion-row>
          <ion-col>
            {{description}}
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `
})
export class EpisodeDetails {

  description: any;
  title: string;

  constructor(
    public viewCtrl: ViewController,
    private navParams: NavParams
  ) {
    this.description = navParams.data.description;
    this.title = navParams.data.title;
  }
}