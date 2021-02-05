import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Commodity } from 'src/app/domain/commodity.model';
import { BitpandaService } from '../../provider/bitpanda.service';

@Injectable({
  providedIn: 'root',
})
export class CommodityRepository {
  private commodities: Commodity[] = [];
  private selectedCommodity: Commodity | null = null;

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

  public selectCommodity(id: number) {
    const found = this.commodities.find((item) =>
      item.id === id ? item : null
    );

    if (found) {
      this.selectedCommodity = found;
      this.selectCommodityObservable.next(this.selectedCommodity);
    }
  }
}
