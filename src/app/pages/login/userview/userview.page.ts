import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-userview',
  templateUrl: './userview.page.html',
  styleUrls: ['./userview.page.scss'],
})
export class UserviewPage implements OnInit {
  
  
  public alertButtons = ['OK'];
  constructor(private menuCtrl: MenuController) {}




openFirstMenu() {
  /**
   * Open the menu by menu-id
   * We refer to the menu using an ID
   * because multiple "start" menus exist.
   */
  this.menuCtrl.open('first-menu');
}

openSecondMenu() {
  /**
   * Open the menu by menu-id
   * We refer to the menu using an ID
   * because multiple "start" menus exist.
   */
  this.menuCtrl.open('second-menu');
}

openEndMenu() {
  /**
   * Open the menu by side
   * We can refer to the menu by side
   * here because only one "end" menu exists
   */
  this.menuCtrl.open('end');
}



  ngOnInit() {
  }

}
