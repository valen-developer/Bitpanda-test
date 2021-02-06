import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CryptocoinComponent } from './cryptocoin/cryptocoin.component';
import { CommodityComponent } from './commodity/commodity.component';
import { NotFound404Component } from './not-found404/not-found404.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'cryptocoin/:id', component: CryptocoinComponent },
      { path: 'commodity/:id', component: CommodityComponent },
      { path: 'notfound', component: NotFound404Component },
      { path: '**', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(pagesRoutes)],
})
export class PagesRoutingModule {}
