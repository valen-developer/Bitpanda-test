import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commodity } from 'src/app/domain/commodity.model';
import { Cryptocoin } from 'src/app/domain/cryptocoin.model';
import { CommodityRepository } from 'src/app/services/repositories/commodity/commodity.service';
import { CryptocoinRepository } from 'src/app/services/repositories/cryptocoin/cryptocoin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cryptocoins: Cryptocoin[] = [];
  public commodities: Commodity[] = [];

  public loadingCryptocoins = true;
  public loadingCommodity = true;

  constructor(
    private cryptocoinRepository: CryptocoinRepository,
    private commodityRepository: CommodityRepository,
    private router: Router
  ) {
    this.subscribeForData();
  }

  ngOnInit(): void {}

  private subscribeForData(): void {
    this.cryptocoinRepository.itemsObservable.subscribe((items) => {
      if (items) {
        this.loadingCryptocoins = false;
        this.cryptocoins = items;
      }
    });
    this.commodityRepository.itemsObservable.subscribe((items) => {
      if (items) {
        this.loadingCommodity = false;
        this.commodities = items;
      }
    });
  }

  public navigateToCryptocoin(id: number): void {
    this.router.navigate(['cryptocoin', id]);
  }
  public navigateToCommodity(id: number): void {
    this.router.navigate(['commodity', id]);
  }

  public navigateToBitPanda(): void {
    window.location.href = 'https://www.bitpanda.com/en';
  }
}
