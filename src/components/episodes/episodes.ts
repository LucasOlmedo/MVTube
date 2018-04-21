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
      'max-height 450ms, padding 450ms'
    );
  }

  toggleCard() {

    if (this.expanded) {
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'max-height',
        '0vh'
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
        '1000vh'
      );
      this.render.setElementStyle(
        this.cardContent.nativeElement,
        'padding',
        '10px 10px'
      );
    }

    this.expanded = !this.expanded;
  }

  episodeInfo(episode) {
    let pop = this.popover.create(EpisodeDetails, {
      description: episode.overview
    });
    pop.present();
  }

}

@Component({
  template: `
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

  constructor(
    public viewCtrl: ViewController,
    private navParams: NavParams
  ) {
    this.description = navParams.data.description;
  }
}