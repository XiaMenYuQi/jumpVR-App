import { Component } from '@angular/core';
import { NavController , NavParams  } from 'ionic-angular';
import { AboutService } from '../server/about.service';

@Component({
  templateUrl: 'about.html',
  providers: [AboutService]
})
export class AboutPage {
  items: any ;
  constructor(params: NavParams ,public navCtrl: NavController,AboutService : AboutService) {
    this.items = AboutService.getAppData();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
