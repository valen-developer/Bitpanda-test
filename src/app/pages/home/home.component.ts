import { Component, OnInit } from '@angular/core';
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
    private commodityRepository: CommodityRepository
  ) {
    this.cryptocoinRepository.itemsObservable.subscribe((items) => {
      if (items) {
        this.loadingCryptocoins = false;
        this.cryptocoins = items;
        console.log(this.cryptocoins[0]);
      }
    });
    this.commodityRepository.itemsObservable.subscribe((items) => {
      if (items) {
        this.loadingCommodity = false;
        this.commodities = items;
      }
    });
  }

  ngOnInit(): void {}

  public selectCoin(index: number): void {
    if (this.cryptocoins.length > 0)
      this.cryptocoinRepository.selectCoin(this.cryptocoins[index].id);
  }

  public selectCommodity(index: number): void {
    if (this.cryptocoins.length > 0)
      this.commodityRepository.selectCommodity(this.cryptocoins[index].id);
  }
}
