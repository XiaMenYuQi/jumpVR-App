import { Component } from '@angular/core';
import { NavController , NavParams  } from 'ionic-angular';
import { CollectPage } from '../collect/collect'
import { AboutPage } from '../about/about'

@Component({
  templateUrl: 'user.html'
})
export class UserPage {
  name;

  constructor(params: NavParams ,public navCtrl: NavController) {
    this.name = params.data.user;
  }

  goBack() {
    this.navCtrl.pop();
  }

  goToCollect(){
    this.navCtrl.push(CollectPage);
  }

  goToAbout(){
    this.navCtrl.push(AboutPage);
  }

  LogOut(){
    localStorage.clear();
    this.navCtrl.pop();
  }
}
