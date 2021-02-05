import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { PagesComponent } from './pages.component';
import { CommodityComponent } from './commodity/commodity.component';
import { CryptocoinComponent } from './cryptocoin/cryptocoin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    PagesComponent,
    CommodityComponent,
    CryptocoinComponent,
    HomeComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
})
export class PagesModule {}
