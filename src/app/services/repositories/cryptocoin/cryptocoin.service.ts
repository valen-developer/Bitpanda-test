import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cryptocoin } from 'src/app/domain/cryptocoin.model';
import { BitpandaService } from '../../provider/bitpanda.service';

@Injectable({
  providedIn: 'root',
})
export class CryptocoinRepository {
  private cryptocoins: Cryptocoin[] = [];

  public itemsObservable: BehaviorSubject<Cryptocoin[]>;
  public selectedCoinObservable: BehaviorSubject<Cryptocoin | null>;

  constructor(private bitPandaService: BitpandaService) {
    this.itemsObservable = new BehaviorSubject<Cryptocoin[]>([]);
    this.selectedCoinObservable = new BehaviorSubject<Cryptocoin | null>(null);
    this.getCryptocoins();
  }

  private async getCryptocoins(): Promise<void> {
    this.cryptocoins = await this.bitPandaService.getCryptocoins();
    this.itemsObservable.next(this.cryptocoins);
  }

  public async selectCoin(id: number): Promise<Cryptocoin> {
    if (this.cryptocoins.length == 0) await this.getCryptocoins();

    const found = this.cryptocoins.find((item) =>
      item.id === id ? item : null
    );

    if (!found) throw new Error('not found');

    return found;
  }
}
