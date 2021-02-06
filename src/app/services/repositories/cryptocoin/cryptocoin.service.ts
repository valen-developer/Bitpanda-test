import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cryptocoin } from 'src/app/domain/cryptocoin.model';
import { BitpandaService } from '../../provider/bitpanda.service';

@Injectable({
  providedIn: 'root',
})
export class CryptocoinRepository {
  private cryptocoins: Cryptocoin[] = [];
  private selectedCoin: Cryptocoin | null = null;

  public itemsObservable: BehaviorSubject<Cryptocoin[]>;
  public selectedCoinObservable: BehaviorSubject<Cryptocoin | null>;

  constructor(private bitPandaService: BitpandaService) {
    this.itemsObservable = new BehaviorSubject<Cryptocoin[]>([]);
    this.selectedCoinObservable = new BehaviorSubject<Cryptocoin | null>(null);
    this.getCryptocoins();
  }

  private async getCryptocoins(): Promise<void> {
    this.cryptocoins = await this.bitPandaService.getCryptocoins();
    console.log(this.cryptocoins);
    this.itemsObservable.next(this.cryptocoins);
  }

  public selectCoin(id: number) {
    const found = this.cryptocoins.find((item) =>
      item.id === id ? item : null
    );

    if (found) {
      this.selectedCoin = found;
      this.selectedCoinObservable.next(this.selectedCoin);
    }
  }
}
