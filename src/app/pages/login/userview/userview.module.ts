import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserviewPageRoutingModule } from './userview-routing.module';

import { UserviewPage } from './userview.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserviewPageRoutingModule,
    SharedModule
  ],
  declarations: [UserviewPage]
})
export class UserviewPageModule {}
