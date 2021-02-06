import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Commodity } from 'src/app/domain/commodity.model';
import { BitpandaService } from '../../provider/bitpanda.service';

@Injectable({
  providedIn: 'root',
})
export class CommodityRepository {
  private commodities: Commodity[] = [];

  public itemsObservable: BehaviorSubject<Commodity[]>;
  public selectCommodityObservable: BehaviorSubject<Commodity | null>;

  constructor(private bitPandaService: BitpandaService) {
    this.itemsObservable = new BehaviorSubject<Commodity[]>([]);
    this.selectCommodityObservable = new BehaviorSubject<Commodity | null>(
      null
    );
    this.getCommodities();
  }

  private async getCommodities(): Promise<void> {
    this.commodities = await this.bitPandaService.getCommodities();
    this.itemsObservable.next(this.commodities);
  }

  public async selectCoin(id: number): Promise<Commodity> {
    if (this.commodities.length == 0) await this.getCommodities();

    const found = this.commodities.find((item) =>
      item.id === id ? item : null
    );

    if (!found) throw new Error('not found');

    return found;
  }
}
