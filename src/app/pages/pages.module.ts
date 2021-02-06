import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CryptocoinComponent } from './cryptocoin/cryptocoin.component';
import { CommodityComponent } from './commodity/commodity.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent, FooterComponent, CryptocoinComponent, CommodityComponent, NotFound404Component, LoadingComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class PagesModule {}
